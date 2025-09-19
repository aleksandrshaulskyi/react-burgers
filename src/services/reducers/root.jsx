import { combineReducers } from 'redux'

import { constructorReducer } from './constructor'
import { orderReducer } from './order'
import { selectedIngredientReducer } from './selected-ingredient'
import { ingredientsReducer } from './ingredients'
import { userReducer } from './user'
import { allowedReducer } from './allowed'


export const rootReducer = combineReducers(
    {
        'ingredients': ingredientsReducer,
        'burgerConstructor': constructorReducer,
        'selectedIngredient': selectedIngredientReducer,
        'order': orderReducer,
        'user': userReducer,
        'isAllowed': allowedReducer,
    }
)
