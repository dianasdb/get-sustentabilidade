import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./pages/home/index";
import AnneLouise from "./pages/AnneLouise";
import Brecho from "./pages/Brecho";
import ChaoCasa from "./pages/ChaoCasa";
import DivinaFulo from "./pages/DivinaFulo";
import PachaMama from "./pages/PachaMama";
import Cadastro from "./pages/Cadastro";
import Carrinho from "./pages/Carrinho";
import LojaPage from "./pages/loja/loja";
import './App.css';
import './global.css';
import carrinho from './pages/img/carrinho.png';
function App() {
  return (
    <div className="home-container">
      <header>
        <div className="home-menu">
          <nav className="home-nav">
            <a href="/">Home</a>
            <a href="">Quem somos?</a>
            <a href="">Fale Conosco</a>
          </nav>

          <nav className="home-nav2">
            <form action="">
              <input type="text" placeholder="Buscar Produto" />
              <button>Buscar</button>
            </form>

            <a href="/cadastro">Cadastro</a>
            <a href="/carrinho"><img className="carrinho" 
            src={carrinho} alt="Carrinho de compras"/></a>
          </nav>
        </div>

      </header>
      <main>
        <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/annelouise" exact component={AnneLouise} />
          <Route path="/brecho" exact component={Brecho} />
          <Route path="/chaodecasa" exact component={ChaoCasa} />
          <Route path="/divinafulo" exact component={DivinaFulo} />
          <Route path="/pachamama" exact component={PachaMama} />
          <Route path="/cadastro" exact component={Cadastro} />
          <Route path="/carrinho" exact component={Carrinho} />
          <Route path="/loja/:id" exact component={LojaPage} />
        </Switch>
        </BrowserRouter>
      </main>

      <footer className="footer-container">
        <p>Contato</p>
        <p>E-mail: emailpessoal@gmail.com</p>
        <p>Telefone: (16)99999-9999</p>
        <p>Telefone: (16)99999-9999</p>
      </footer>
   </div>
  );
}
export default App;