class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    this.render();
  }

  get value() {
    return this.shadowDOM.querySelector('#searchElement').value;
  }

  get changeAttributeByName() {
    const getElement = this.shadowDOM.querySelector('#searchElement');
    return getElement.setAttribute('placeholder', 'Search meal by name');
  }
  
  get changeAttributeByCategory() {
    const getElement = this.shadowDOM.querySelector('#searchElement');
    return getElement.setAttribute('placeholder', 'Search meal by category');
  }

  get changeAttributeByOrigin() {
    const getElement = this.shadowDOM.querySelector('#searchElement');
    return getElement.setAttribute('placeholder', 'Search meal by origin');
  }

  get changeAttributeByMainIngredient() {
    const getElement = this.shadowDOM.querySelector('#searchElement');
    return getElement.setAttribute('placeholder', 'Search meal by main ingredient');
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        .search-container {
          display: flex;
          margin: auto;
          padding: 16px;
          position: sticky;
          top: 10px;
          max-width: 800px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          border-radius: 10px;
          background-color: white;
        }
        
        .search-container > input {
          padding: 16px;
          border: 0;
          border-bottom: 1px solid #F9B208;
          width: 80%;
          color: #8E3200;
          font-weight: 700;
        }
        
        .search-container > input:focus {
          outline: 0;
          border-bottom: 2px solid #F9B208;
        }
        
        .search-container > input:focus::placeholder {
          font-weight: 700;
        }
        
        .search-container > input::placeholder {
          color: #8E3200;
          font-weight: 400;
        }
        
        .search-container > button {
          margin-left: auto;
          padding: 16px;
          width: 18%;
          border: 0;
          border-radius: 10px;
          cursor: pointer;
          background-color: #F9B208;
          color: #8E3200;
          font-weight: 700;
        }
        
        @media screen and (max-width: 550px) {
          .search-container {
            flex-direction: column;
            position: static;
          }
        
          .search-container > input {
            margin-bottom: 12px;
            width: 100%;
          }
        
          .search-container > button {
            width: 100%;
          }
        }
      </style>

      <div id="search-container" class="search-container">
        <input type="search" id="searchElement" placeholder="Search meal by name" >
        <button type="button" id="searchButtonElement" class="btn btn-danger">SEARCH</button>
      </div>
    `;
    this.shadowDOM.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
  }
}

customElements.define('search-bar', SearchBar);