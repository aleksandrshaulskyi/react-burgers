import { INGREDIENT_ADDED, INGREDIENT_MOVED } from '../actions/constructor';


const constructorInitialState = { constructorIngredients: [] };

export const constructorReducer = (state = constructorInitialState, action) => {
    switch (action.type) {
        case INGREDIENT_ADDED: {
          const item = action.payload;

			if (item.type === 'bun') {
				const withoutBun = state.constructorIngredients.filter(it => it.type !== 'bun')
				const bun = { ...item, uid: 'bun' }
				return { ...state, constructorIngredients: [...withoutBun, bun] };
			}

			return {
				...state,
				constructorIngredients: [...state.constructorIngredients, item]
			};
		}

	case INGREDIENT_MOVED: {
		const { from, to } = action.payload || {}

		if (typeof from !== 'number' || typeof to !== 'number') return state

		const bun = state.constructorIngredients.find(it => it.type === 'bun') || null
		const fillings = state.constructorIngredients.filter(it => it.type !== 'bun')

		if (from < 0 || from >= fillings.length || to < 0 || to >= fillings.length) {
			return state;
		}

		const next = fillings.slice();
		const [moved] = next.splice(from, 1);
		next.splice(to, 0, moved);

		return { ...state, constructorIngredients: bun ? [bun, ...next] : next };

    }

	default:
		return state;
    }
};
