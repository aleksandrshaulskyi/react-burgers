import { INGREDIENTS_LOADING, INGREDIENTS_LOADING_SUCCESSFULL, INGREDIENTS_LOADING_FAILED} from '../actions/ingredients'


const ingredientsInitialState = {ingredients: [], loading: false, error: null}


export const ingredientsReducer = (state = ingredientsInitialState, action) => {
    switch (action.type) {
        case INGREDIENTS_LOADING: {
            return {...state, loading: true}
        }
        case INGREDIENTS_LOADING_SUCCESSFULL: {
            return {...state, ingredients: action.payload, loading: false}
        }
        case INGREDIENTS_LOADING_FAILED: {
            return {...state, loading: false, error: action.payload}
        }
        default: {
            return state
        }
    }
}
