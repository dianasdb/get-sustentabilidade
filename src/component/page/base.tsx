import { FunctionComponent, useEffect, useState } from "react";
import { useParams } from "react-router";
import Loja from "../../models/loja";
import Produto from "../../models/produto";
import lojasService from "../../services/lojas";
import carrinho from '../../pages/img/carrinho.png';

type Params = {
    id: string
}

const Base: FunctionComponent = ({children}) => {
    /* const { id } = useParams<Params>()

    const [loja, setLoja] = useState <Loja | undefined>()

    const [produtos, setProdutos] = useState<Produto[]>([])

    useEffect(
        () => {
            lojasService.ler(id, (loja) => {
                setLoja(loja)
            })

            lojasService.lerTodosProdutos(id, (produtos) => {
                setProdutos(produtos)
                
            })
        }
    ) */

    return (
        <>
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
                    {children}
                </main>
                <footer className="footer-container">
                    <p>Contato</p>
                    <p>E-mail: emailpessoal@gmail.com</p>
                    <p>Telefone: (16)99999-9999</p>
                    <p>Telefone: (16)99999-9999</p>
                </footer>
            </div>
        </>
    );
}


export default Base;