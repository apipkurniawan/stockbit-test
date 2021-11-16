import { Dispatch } from "redux";
import { ActionType } from "state/action-types";
import axios from "axios";
import { BASE_URL } from "config/base-url";

const API_KEY = "75a11c17";

export const getMoviesDefault = async (dispatch: Dispatch): Promise<any> => {
  try {
    dispatch({ type: ActionType.GET_REQUEST_MOVIE });
    const response = await axios.get(
      `${BASE_URL}/?apikey=${API_KEY}&s=Batman&page=2`
    );

    dispatch({ type: ActionType.SET_MOVIE, payload: response.data.Search });
  } catch (error) {
    dispatch({ type: ActionType.GET_ERROR_MOVIE });
  }
};

export const getMoviesBySearching = async (
  txtSearch: string,
  dispatch: Dispatch
): Promise<any> => {
  try {
    dispatch({ type: ActionType.GET_REQUEST_MOVIE });
    const response = await axios.get(
      `${BASE_URL}/?apikey=${API_KEY}&s=${txtSearch}`
    );

    dispatch({ type: ActionType.SET_MOVIE, payload: response.data.Search });
  } catch (error) {
    dispatch({ type: ActionType.GET_ERROR_MOVIE });
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
  } catch (error) {
    dispatch({ type: ActionType.GET_ERROR_MOVIE });
  }
};
