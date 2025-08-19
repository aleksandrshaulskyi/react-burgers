import {INGREDIENTS_LOADING, INGREDIENTS_LOADING_SUCCESSFULL, INGREDIENTS_LOADING_FAILED} from '../services/actions/ingredients'


const YA_API_URL = 'https://norma.nomoreparties.space/api/ingredients'

export default function fetchIngredients() {
  return async function (dispatch) {
    dispatch({ type: INGREDIENTS_LOADING });

    try {
      const response = await fetch(YA_API_URL);

      if (!response.ok) {
        throw new Error("Failed to fetch the data.");
      }

      const response_data = await response.json();

      dispatch({
        type: INGREDIENTS_LOADING_SUCCESSFULL,
        payload: response_data.data,
      });
    } catch (error) {
      dispatch({ type: INGREDIENTS_LOADING_FAILED, payload: error.message });
    }
  };
}
