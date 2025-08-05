import AppStyles from './app.module.css'

import AppHeader from '../app-header/app-header'
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';

function App() {
  return (
    <main>
      <AppHeader />
      <div className={AppStyles.contentWrapper}>
        <BurgerIngredients />
        <BurgerConstructor />
      </div>
    </main>
  );
}

export default App;
