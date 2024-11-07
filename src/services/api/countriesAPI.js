import axiosClient from "./axiosClient";

const countriesAPI = {
  getAll: (params) => {
      const url = 'all';
      return axiosClient.get(url, params);
  },
//   getTrendingMovieList: (params) => {
//       const url = 'trending/movie/day'
//       return axiosClient.get(url, params);
//   },
//   getVideos: (id, params) => {
//       const url = 'movie/' + id + '/videos';
//       return axiosClient.get(url, params);
//   },
//   search: (params) => {
//       const url = 'search/movie';
//       return axiosClient.get(url, params);
//   },
//   detail: (id, params) => {
//       const url = 'movie/' + id;
//       return axiosClient.get(url, params);
//   },
//   similar: (id, params) => {
//       const url = 'movie/' + id + '/similar';
//       return axiosClient.get(url, params);
//   },
//   genres: (params) => {
//     const url = 'genre/movie/list';
//     return axiosClient.get(url, params);
//   },
//   getMoviesByCategory: (id, params) => {
//     const url = 'discover/movie'
//     return axiosClient.get(url, {params: {...params.params, with_genres: id}})
//   }
}

export default countriesAPI;