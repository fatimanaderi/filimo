import { api } from "src/boot/axios";

export const getAllMovies = (params) => api.get("main/tags", { params });

export const getMovies = (params) => api.get(`tag`, { params });

export const getMovie = (params) => api.get(`current/${params.type}/${params.id}`);

export const getComments = (params) => api.get("comments", { params });

export const getSpecficsMovies = (params) => api.get(`tag`, { params });

export const getGanreMovies = (params) => api.get(`types/${params.type}/${params.tag}`);

export const getMovieProperties =(params)=> api.get("properties");

export const getFilterdMovies = (params)=>api.get(`search/properties` , {params});

export const getSearchMovies = (params)=>api.get(`all`);

export const postPopularityMovie=(params)=>api.post("property/popularity",{params});

export const postPopularityComment=(params)=>api.post("comments/popularity",{params});

export const postComment=(params)=>api.post("comments/newcomment" ,{params});
