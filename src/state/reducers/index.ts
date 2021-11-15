import { combineReducers } from "redux";
import movieReducer from "./movieReducer";

const reducers = combineReducers({
  movies: movieReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
