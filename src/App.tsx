import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./pages/Home";
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
    <>
    <div className="container">
    <div className="header-app">
      <header>
        <div className="nav-app">
          <nav>
            <a href="/">Home</a>
            <a href="">Quem somos?</a>
            <a href="">Fale Conosco</a>
            <a href="/cadastro">Cadastro</a>
            <a href="/carrinho"><img className="carrinho" src={carrinho} 
            alt="Carrinho de compras"/>Carrinho</a>
          </nav>
        </div>

        <div className="app-form">
          <form action="">
            <input type="text" value="Palavra-Chave" />
            <button>Buscar</button>
          </form>
        </div>

      </header>
    </div>

    <div className="app-main">
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
    </div>

      <div className="footer-app">
        <footer>
          Contato
          E-mail:
          Telefone:
        </footer>
      </div>
    </div>

   </>
  );
}

export default App;
