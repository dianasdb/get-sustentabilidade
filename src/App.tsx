import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./pages/home/index";
import AnneLouise from "./pages/AnneLouise";
import Cadastro from "./pages/Cadastro";
import Carrinho from "./pages/Carrinho";
import LojaPage from "./pages/loja/loja";
import './App.css';
import './global.css';
import carrinho from './pages/img/carrinho.png';
function App() {
  return (
    
        <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/annelouise" exact component={AnneLouise} />
          <Route path="/cadastro" exact component={Cadastro} />
          <Route path="/carrinho" exact component={Carrinho} />
          <Route path="/lojas/:id" exact component={LojaPage} />
        </Switch>
        </BrowserRouter>
      
  );
}
export default App;