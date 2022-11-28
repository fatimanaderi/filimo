const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/IndexPage.vue"),
      },
      {
        path: "AcountPayment",
        name: "AcountPayment",
        component: () => import("pages/AcountPayment.vue"),
      },
      {
        path: "movies/:type",
        name: "movies",
        component: () => import("pages/MoviesPage.vue"),
      },
      {
        path: "movies/:type/:tag",
        name: "moviesganre",
        component: () => import("src/pages/MoviesGanrePage.vue"),
      },
      {
        path: "movies/:type/:id",
        name: "movie",
        component: () => import("pages/MoviePage.vue"),
      },
      {
        path: "movies/filterd",
        name: "filterdmovie",
        component: () => import("src/pages/FilterdMoviesPage.vue"),
      },
    ],
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
