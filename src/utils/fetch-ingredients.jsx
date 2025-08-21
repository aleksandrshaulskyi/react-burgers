import { INGREDIENTS_LOADING, INGREDIENTS_LOADING_SUCCESSFULL, INGREDIENTS_LOADING_FAILED } from '../services/actions/ingredients'
import { BASE_YA_API_URL } from '../config'
import { checkResponse } from './check-response'


const YA_API_URL = `${BASE_YA_API_URL}ingredients`

export default function fetchIngredients() {
  return async function (dispatch) {
    dispatch({ type: INGREDIENTS_LOADING });

    try {
      const response = await fetch(YA_API_URL).then(checkResponse)

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
