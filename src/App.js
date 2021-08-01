import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';
import SignIn from './pages/SignIn';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/busca-livre" exact component={ Home } />
          <Route path="/cart" exact component={ Cart } />
          <Route
            path="/produto/:id"
            render={ (props) => <ProductDetails { ...props } /> }
          />
          <Route
            path="/signup"
            render={ (props) => <SignIn { ...props } />}
          />
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
