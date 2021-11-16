export enum ActionType {
  GET_REQUEST_MOVIE = "REQUEST_MOVIE",
  SET_MOVIE = "SET_MOVIE",

  GET_REQUEST_MOVIE_DETAIL = "REQUEST_MOVIE_DETAIL",
  SET_MOVIE_DETAIL = "SET_MOVIE_DETAIL",

  GET_ERROR_MOVIE = "GET_ERROR_MOVIE",
}

export interface InitialStateInterface {
  listMovies: any[];
  isLoading: boolean;
  isLoadingDetail: boolean;
  movieDetail: any;
}
