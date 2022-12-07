class MealItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  set meal(meal) {
    this._meal = meal;
    this.render();
  }
  
  render() {
    this.shadowDOM.innerHTML = `
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :host {
          display: block;
          margin: 16px auto;
          width: 23%;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          border-radius: 10px;
          overflow: hidden;
          background-color: #FDEEDC;
        }
        
        .meal-picture {
          width: 100%;
          max-height: 200px;
          object-fit: cover;
          object-position: center;
        }
        
        .meal-info {
          padding: 16px;
        }
        
        .meal-info > h2 {
          font-weight: lighter;
        }
        
        .meal-info > p {
          margin-top: 5px;
          overflow: hidden;
        }

        @media screen and (max-width: 480px) {
          :host {
            margin: 10px auto;
            width: 98%;
          }
        }

        @media screen and (max-width: 720px) {
          :host {
            margin: 10px auto;
            width: 48%;
          }
        }

        @media screen and (max-width: 1000px) {
          :host {
            margin: 14px auto;
            width: 32%;
          }
        }
      </style>
    `;

    if (this._meal.strCategory == undefined) {
      this.shadowDOM.innerHTML += `
        <div class="card">
          <img id="${this._meal.idMeal}-picture" class="meal-picture" src="${this._meal.strMealThumb}" alt="Meal picture">
          <div class="card-body meal-info">
            <h2 id="${this._meal.idMeal}-name" class="card-title">${this._meal.strMeal}</h2>
          </div>
        </div>
      `;
    } else {
      this.shadowDOM.innerHTML += `
        <div class="card">
          <img id="${this._meal.idMeal}-picture" class="meal-picture" src="${this._meal.strMealThumb}" alt="Meal picture">
          <div class="card-body meal-info">
            <h2 id="${this._meal.idMeal}-name" class="card-title">${this._meal.strMeal}</h2>
            <p id="${this._meal.idMeal}-category" class="card-text"><b>Category:</b> ${this._meal.strCategory}</p>
            <p id="${this._meal.idMeal}-origin" class="card-text"><b>Origin:</b> ${this._meal.strArea}</p>
          </div>
        </div>
      `;
    }
  }
}

customElements.define('meal-item', MealItem);