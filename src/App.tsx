import './App.css';

import AppHeader from './components/app-header/app-header'
import BurgerConstructor from './components/burger-constructor/burger-constructor';
import BurgerIngredients from './components/burger-ingredients/burger-ingredients';

function App() {
  return (
    <main>
      <AppHeader />
      <div className='content-wrapper'>
        <BurgerIngredients />
        <BurgerConstructor />
      </div>
    </main>
  );
}

export default App;
