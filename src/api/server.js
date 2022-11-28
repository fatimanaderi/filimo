import { createServer, Model, RestSerializer, belongsTo } from "miragejs";
import { comments } from "src/api/data/movies/comments";
import { types, allMovies } from "src/api/conf/types";
import { movies } from "src/api/conf/movies";
import { movieProperties } from "src/api/conf/movieProperties";
export function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,
    models: {
      type: Model,
      allMovie: Model,
      movie: Model,
      comment: Model.extend({
        movie: belongsTo(),
      }),
      movieProperty: Model.extend({
        movie: belongsTo(),
      }),
    },
    fixtures: {
      types,
      allMovies,
      movies,
      comments,
      movieProperties,
    },
    seeds(server) {
      server.loadFixtures();
    },
    serializers: {
      application: RestSerializer,
    },

    routes() {
      this.logging = false;
      this.namespace = "/api/movies";

      this.get("/main/tags", function (schema, request) {
        let data = this.serialize(schema.types.all());
        data.pageSize = +request.queryParams.pageSize || 3;
        data.pageNumber = +request.queryParams.pageNumber || 1;
        data.totalPage = data.types.length / data.pageSize;
        data.types = data.types.slice(0, data.pageSize * data.pageNumber);
        return data;
      });
      this.get("/comments", function (schema) {
        let comments = schema.comments.all().slice(0, 6);
        return comments;
      });
      this.get("current/:tag/:id", function (schema, request) {
        let movies = this.serialize(schema.movies.all());
        let movie = movies.movies.find(
          (movie) => movie.id == request.params.id
        );
        return movie;
      });
      this.get("/properties", function (schema) {
        let properties = this.serialize(schema.movieProperties.all());
        let data = this.serialize(properties);
        return data;
      });
      this.get("/tag", function (schema, request) {
        let movies = this.serialize(schema.allMovies.all());
        let typeMovie = movies.allMovies.find(
          (type) => type.titleEn == request.queryParams.type
        );
        let data = this.serialize(typeMovie);
        data.pageNumber = +request.queryParams.pageNumber || 1;
        data.pageSize = +request.queryParams.pageSize;
        data.totalPage = Math.ceil(typeMovie.movies.length / data.pageSize);
        data.movies = typeMovie.movies.slice(
          data.pageSize * (data.pageNumber - 1),
          data.pageSize * data.pageNumber
        );
        return data;
      });
      this.get("/types/:type/:tag", function (schema, request) {
        let movies = this.serialize(schema.allMovies.all());
        let typeMovies = movies.allMovies.filter(
          (movie) => movie.titleEn == request.params.tag
        );
        return typeMovies[0];
      });
      this.get("/search/properties", function (schema, request) {
        let movies = this.serialize(schema.movies.all());
        let filterdMovie = [];
        for (let movie of movies.movies) {
          let checkeMovie = [];
          for (let property in request.queryParams) {
            let requestproperty = JSON.parse(request.queryParams[property]);
            if (movie[property].englishname == requestproperty.englishname) {
              checkeMovie.push(true);
            } else checkeMovie.push(false);
          }
          let result = checkeMovie.every((val) => val == true);
          if (result) filterdMovie.push(movie);
        }
        return filterdMovie;
      });
      this.get("/all", function (schema, request) {
        let movies = this.serialize(schema.movies.all());
        return movies;
      });
      this.post("/property/popularity", function (schema, request) {
        let attrs = JSON.parse(request.requestBody);
        attrs = attrs.params;
        let property = attrs.movie["popularity"][attrs.type];
        if (attrs.type == "like")
          attrs.movie["popularity"][attrs.type] = property + 1;
        else attrs.movie["popularity"][attrs.type] = property - 1;
        return attrs.movie;
      });
      this.post("/comments/popularity", function (schema, request) {
        let attrs = JSON.parse(request.requestBody);
        let allComments = attrs.params.comments.comments;
        let currentComment = attrs.params.currentComment;
        let currentType = attrs.params.type;
        if (currentType == "like")
          currentComment[currentType] = currentComment[currentType] + 1;
        else currentComment[currentType] = currentComment[currentType] - 1;
        for (let [index, comment] of allComments.entries()) {
          if (comment.id == currentComment.id)
            allComments[index] = currentComment;
        }
        return {
          comments: allComments,
        };
      });
      this.post("/comments/newcomment", function (schema, request) {
        let attrs = JSON.parse(request.requestBody);
        let mydata = attrs.params.comments.comments;
        let comment = attrs.params.newComment;
        let newCommnet = {
          id: `fatima${Math.floor(Math.random() * (10 + 99))}`,
          data: "",
          like: 0,
          dislike: 0,
          ...comment,
        };
        return {
          comments: [newCommnet, ...mydata],
        };
      });
    },
  });
  return server;
}
