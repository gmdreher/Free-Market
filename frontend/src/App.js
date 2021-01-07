import React from 'react';
import { Provider } from 'react-redux';
import './index.css';
import ListProduct from './components/ListProduct.jsx';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { createStore } from 'redux';
import reducer from './reducer.js';
import Filter from './components/Filter.jsx';
import ProductDetails from './container/ProductDetails.jsx';

const initialState = {
  listProduct: [],
  listProductByName: [],
  productFilterByCategory: [],
  filterByCategory: ''
}

const store = createStore(reducer, initialState)

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="home">
          <header className="nav">
            <Link to="/">
              <div>
                <Link className="brand" to="/">Free Market</Link>
              </div>
            </Link>
          </header>
          <main>
            <Switch>
              <Route path="/products/:id" component={ProductDetails} />
              <Route path="/">
                <Filter />
                <ListProduct />
              </Route>
            </Switch>
          </main>
          <footer className="foot">Todos los derechos reservados</footer>
        </div>
      </Router>
    </Provider >
  );
}

export default App;
