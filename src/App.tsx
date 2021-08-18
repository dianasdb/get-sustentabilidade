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

function App() {
  return (
    <>
      <header>
        <nav className="acesso">
        <a href="/">Home</a>
        <a href="">Quem somos?</a>
        <a href="">Fale conosco</a>
        <a href="/cadastro">Cadastro</a>
        <a href="/carrinho">Carrinho</a>
        </nav>
        <form action="">
          <input type="text" value="Palavra-Chave" />
          <button>Buscar</button>
        </form>
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
        </Switch>
        </BrowserRouter>
      </main>
      <footer>
        Contato
        E-mail:
        Telefone:
      </footer>
   </>
  );
}

export default App;
