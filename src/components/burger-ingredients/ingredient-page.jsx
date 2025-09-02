import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import IngredientDetails from '../burger-ingredients/ingredient-details/ingredient-details'

export default function IngredientPage() {
  const { id } = useParams()
  const ingredients = useSelector(state => state.ingredients.ingredients)

  if (!ingredients || ingredients.length === 0) {
    return <p className="text text_type_main-default">Загрузка...</p>
  }

  const ingredient = ingredients.find(it => it._id === id)

  if (!ingredient) {
    return <p className="text text_type_main-default">Ингредиент не найден</p>
  }

  return (
    <main style={{ maxWidth: 720, margin: '40px auto' }}>
      <IngredientDetails selectedIngredient={ingredient} />
    </main>
  )
}