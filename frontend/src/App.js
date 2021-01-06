import React from 'react';
import SearchBar from './components/SearchBar.jsx';
import { Provider } from 'react-redux';
import './index.css';
import ListProduct from './components/ListProduct.jsx';
import { BrowserRouter as Router, Link } from "react-router-dom";
import Category from './components/Category.jsx';
import { createStore } from 'redux';

const initialState = {
  listProduct: []
}

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case 'LIST_PRODUCT': {
      console.log("Lista de productos");
      return {
        ...state,
        listProduct: action.payload
      }
    }
    default: {
      return state
    }
  }
}

const store = createStore(reducer, initialState)

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="home">
          <header className="nav">
            <div>
              <Link className="brand" to="/">Shop Center</Link>
            </div>
            <div className="searchbar">
              <SearchBar
                onSearch={(producto) => alert(producto)}
              />
            </div>
          </header>
          <main>
            <div className="seeker">
              <Category />
              <div className="order">
                <span>Precio   </span>
                <select name="opctionOrder">
                  <option>Ascendente</option>
                  <option>Descendente</option>
                </select>
              </div>
            </div>
            <ListProduct />
            {/* <Route path="/" component={HomeScreen} exact ></Route>
          <Route path="/product/:id" component={Product}></Route> */}
          </main>
          <footer className="foot">Todos los derechos reservados</footer>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
