import PropTypes from 'prop-types';

import BurgerIngredientsStyles from './ingredient-details.module.css'


export default function IngredientDetails({selectedIngredient }) {
    return (
        <div className={BurgerIngredientsStyles.modalContainer}>
            <div className={BurgerIngredientsStyles.modalImageContainer}>
                <img src={selectedIngredient.image_large} alt={selectedIngredient.name}></img>
            </div>
            <div className='mt-4'>
                <div className={BurgerIngredientsStyles.modalNameContainer}>
                    <p className='text text_type_main-medium'>{selectedIngredient.name}</p>
                </div>
            </div>
            <div className='mt-8'>
                <div className={BurgerIngredientsStyles.modalInfoContainer}>
                    <div className={BurgerIngredientsStyles.modalInfoItemContainer}>
                        <div className={BurgerIngredientsStyles.modalInfoItem}>
                            <p className='text text_type_main-default text_color_inactive'>Калории, ккал</p>
                        </div>
                        <div className={BurgerIngredientsStyles.modalInfoItem}>
                            <p className='text text_type_main-default text_color_inactive'>{selectedIngredient.calories}</p>
                        </div>
                    </div>
                    <div className={BurgerIngredientsStyles.modalInfoItemContainer}>
                        <div className={BurgerIngredientsStyles.modalInfoItem}>
                            <p className='text text_type_main-default text_color_inactive'>Белки, г</p>
                        </div>
                        <div className={BurgerIngredientsStyles.modalInfoItem}>
                            <p className='text text_type_main-default text_color_inactive'>{selectedIngredient.proteins}</p>
                        </div>
                    </div>
                    <div className={BurgerIngredientsStyles.modalInfoItemContainer}>
                        <div className={BurgerIngredientsStyles.modalInfoItem}>
                            <p className='text text_type_main-default text_color_inactive'>Жиры, г</p>
                        </div>
                        <div className={BurgerIngredientsStyles.modalInfoItem}>
                            <p className='text text_type_main-default text_color_inactive'>{selectedIngredient.fat}</p>
                        </div>
                    </div>
                    <div className={BurgerIngredientsStyles.modalInfoItemContainer}>
                        <div className={BurgerIngredientsStyles.modalInfoItem}>
                            <p className='text text_type_main-default text_color_inactive'>Углеводы, г</p>
                        </div>
                        <div className={BurgerIngredientsStyles.modalInfoItem}>
                            <p className='text text_type_main-default text_color_inactive'>{selectedIngredient.carbohydrates}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

IngredientDetails.propTypes = {
    selectedIngredient: PropTypes.shape({
        image_large: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        calories: PropTypes.number.isRequired,
        proteins: PropTypes.number.isRequired,
        fat: PropTypes.number.isRequired,
        carbohydrates: PropTypes.number.isRequired
    }).isRequired
};
