import { nanoid } from 'nanoid'

export const INGREDIENT_ADDED = 'INGREDIENT_ADDED'
export const INGREDIENT_MOVED = 'INGREDIENT_MOVED'


const genId = () => (typeof crypto !== 'undefined' && crypto.randomUUID) ? crypto.randomUUID() : nanoid()

export const addIngredient = (ingredient) => {
    const uid = ingredient.type === 'bun' ? 'bun' : genId();
    return {
        type: INGREDIENT_ADDED,
        payload: { ...ingredient, uid }
    }
}

export const moveIngredient = (from, to) => ({
    type: INGREDIENT_MOVED,
    payload: { from, to }
})
