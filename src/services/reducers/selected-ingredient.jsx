import { SELECTED_INGREDIENT_CHANGED } from '../actions/selected-ingredient'


const selectedIngredientState = { selectedIngredient: null }


export const selectedIngredientReducer = (state = selectedIngredientState, action) => {
    switch(action.type) {
        case SELECTED_INGREDIENT_CHANGED: {
            return {...state, selectedIngredient: action.payload}
        }
        default:
            return state
    }
}
