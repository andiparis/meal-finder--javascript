import { async } from 'regenerator-runtime';

class DataSource {
  static searchMealByName(keyword) {
    return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        if (responseJson.meals) {
          return Promise.resolve(responseJson.meals);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      });
  }

  static searchMealByCategory(keyword) {
    return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${keyword}`)
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        if (responseJson.meals) {
          return Promise.resolve(responseJson.meals);
        } else {
          return Promise.reject(`${keyword} category is not found`);
        }
      });
  }

  static searchMealByOrigin(keyword) {
    return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${keyword}`)
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        if (responseJson.meals) {
          return Promise.resolve(responseJson.meals);
        } else {
          return Promise.reject(`${keyword} country is not found`);
        }
      });
  }

  static searchMealByMainIngredient(keyword) {
    return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${keyword}`)
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        if (responseJson.meals) {
          return Promise.resolve(responseJson.meals);
        } else {
          return Promise.reject(`${keyword} main ingredient is not found`);
        }
      });
  }
}

export default DataSource;