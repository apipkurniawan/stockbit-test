import { Dispatch } from "redux";
import { ActionType } from "state/action-types";
import axios from "axios";
import { BASE_URL } from "config/base-url";

export const getListMovies = async (dispatch: Dispatch): Promise<any> => {
  try {
    dispatch({ type: ActionType.GET_REQUEST_MOVIE });
    const response = await axios.get(
      `${BASE_URL}/?apikey=75a11c17&s=Batman&page=2`
    );

    dispatch({ type: ActionType.SET_MOVIE, payload: response.data.Search });
  } catch (error) {
    dispatch({ type: ActionType.GET_ERROR_MOVIE });
  }
};
