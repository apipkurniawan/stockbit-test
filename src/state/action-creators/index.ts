import { Dispatch } from "redux";
import { ActionType } from "state/action-types";
import axios from "axios";
import { BASE_URL } from "config/base-url";

const API_KEY = "75a11c17";

export const getMoviesDefault = async (dispatch: Dispatch): Promise<any> => {
  try {
    resetMsgErrorMovie(dispatch);
    dispatch({ type: ActionType.GET_REQUEST_MOVIE });
    const response = await axios.get(
      `${BASE_URL}/?apikey=${API_KEY}&s=Batman&page=2`
    );

    dispatch({ type: ActionType.SET_MOVIE, payload: response.data.Search });
  } catch (error: any) {
    dispatch({ type: ActionType.GET_ERROR_MOVIE, payload: error.message });
  }
};

export const getMoviesBySearching = async (
  txtSearch: string,
  dispatch: Dispatch
): Promise<any> => {
  try {
    resetMsgErrorMovie(dispatch);
    dispatch({ type: ActionType.GET_REQUEST_MOVIE });
    const response = await axios.get(
      `${BASE_URL}/?apikey=${API_KEY}&s=${txtSearch}`
    );

    if (response.data.Response === "False") {
      dispatch({ type: ActionType.SET_MOVIE, payload: null });
      throw new Error(response.data.Error);
    }

    let dataFiltered = response.data.Search.filter((e: any) =>
      e.Poster.includes("http")
    );
    dispatch({ type: ActionType.SET_MOVIE, payload: dataFiltered });
  } catch (error: any) {
    dispatch({
      type: ActionType.GET_ERROR_MOVIE,
      payload: error.message,
    });
  }
};

export const getMovieDetail = async (
  id: string,
  dispatch: Dispatch
): Promise<any> => {
  try {
    dispatch({ type: ActionType.GET_REQUEST_MOVIE_DETAIL });
    const response = await axios.get(`${BASE_URL}/?apikey=${API_KEY}&i=${id}`);

    dispatch({ type: ActionType.SET_MOVIE_DETAIL, payload: response.data });
  } catch (error: any) {
    dispatch({
      type: ActionType.GET_ERROR_MOVIE,
      payload: error.message,
    });
  }
};

const resetMsgErrorMovie = async (dispatch: Dispatch): Promise<any> => {
  try {
    dispatch({
      type: ActionType.GET_ERROR_MOVIE,
      payload: "",
    });
  } catch (error) {}
};
