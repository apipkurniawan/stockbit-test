import { ActionType, InitialStateInterface } from "state/action-types";
import { Action } from "state/actions";

export const INIT_STATE: InitialStateInterface = {
  listMovies: [],
  isLoading: false,
  movie: null,
};
const movieReducer = (
  state: InitialStateInterface = INIT_STATE,
  action: Action
) => {
  switch (action.type) {
    case ActionType.GET_REQUEST_MOVIE:
      return { ...state, isLoading: true };
    case ActionType.SET_MOVIE:
      return {
        ...state,
        listMovies: action.payload,
        isLoading: false,
      };
    case ActionType.GET_ERROR_MOVIE:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export default movieReducer;
