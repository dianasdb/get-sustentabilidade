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
            <a href="/cadastro">Cadastro</a>
            <a href="/carrinho"><img className="carrinho" src={carrinho} alt="Carrinho de compras"/>Carrinho</a>
          <form action="">
            <input type="text" value="Palavra-Chave" />
            <button>Buscar</button>
          </form>
          </nav>
        </div>
      </header>
      <main>
        <h1>Destaques lançamentos</h1>
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
        </Switch>
        </BrowserRouter>
      </main>
      <footer className="footer-container">
        
        <p>E-mail: emailpessoal@gmail.com</p>
        <p>Telefone: (16)99999-9999</p>
        <p>Telefone: (16)99999-9999</p>
        <p>Contato</p>
      </footer>
   </div>
  );
}

export default App;
