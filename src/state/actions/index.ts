import { ActionType } from "state/action-types";

interface GetMovieAction {
  type: ActionType.GET_REQUEST_MOVIE;
}

interface SetMovieAction {
  type: ActionType.SET_MOVIE;
  payload: any[];
}

interface GetMovieDetailAction {
  type: ActionType.GET_REQUEST_MOVIE_DETAIL;
}

interface SetMovieDetailAction {
  type: ActionType.SET_MOVIE_DETAIL;
  payload: any;
}

interface ErrorMovieAction {
  type: typeof ActionType.GET_ERROR_MOVIE;
}

export type Action =
  | GetMovieAction
  | SetMovieAction
  | GetMovieDetailAction
  | SetMovieDetailAction
  | ErrorMovieAction;
