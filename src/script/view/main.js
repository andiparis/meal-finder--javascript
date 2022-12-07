import { async } from 'regenerator-runtime';
import '../component/search-bar.js';
import '../component/meal-list.js';
import '../component/meal-item.js';
import DataSource from '../data/data-source.js';

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const mealListElement = document.querySelector('meal-List');

  document.querySelector('#byName').addEventListener('click', () => {
    searchElement.clickEvent = onButtonSearchByNameClicked;
    searchElement.changeAttributeByName;
    mealListElement.clearOldRender;
  });

  document.querySelector('#byCategory').addEventListener('click', () => {
    searchElement.clickEvent = onButtonSearchByCategoryClicked;
    searchElement.changeAttributeByCategory;
    mealListElement.clearOldRender;
  });

  document.querySelector('#byOrigin').addEventListener('click', () => {
    searchElement.clickEvent = onButtonSearchByOriginClicked;
    searchElement.changeAttributeByOrigin;
    mealListElement.clearOldRender;
  });

  document.querySelector('#byMainIngredient').addEventListener('click', () => {
    searchElement.clickEvent = onButtonSearchByMainIngredientClicked;
    searchElement.changeAttributeByMainIngredient;
    mealListElement.clearOldRender;
  });

  const onButtonSearchByNameClicked = async () => {
    try {
      const result = await DataSource.searchMealByName(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const onButtonSearchByCategoryClicked = async () => {
    try {
      const result = await DataSource.searchMealByCategory(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const onButtonSearchByOriginClicked = async () => {
    try {
      const result = await DataSource.searchMealByOrigin(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const onButtonSearchByMainIngredientClicked = async () => {
    try {
      const result = await DataSource.searchMealByMainIngredient(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = results => mealListElement.meals = results;

  const fallbackResult = message => mealListElement.renderError(message);

  searchElement.clickEvent = onButtonSearchByNameClicked;
};

export default main;