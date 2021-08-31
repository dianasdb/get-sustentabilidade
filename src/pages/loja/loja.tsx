import { FunctionComponent, useEffect, useState } from "react";
import { useParams } from "react-router";
import Loja from "../../models/loja";
import Produto from "../../models/produto";
import lojasService from "../../services/lojas";
import Base from '../../component/page/base';
import gloss from '../img/gloss.jpeg'
import aromatizador from '../img/aromatizador.jpeg'
import mascaracilios from '../img/mascaracilios.jpeg'
import annelouise from '../img/annelouise.jpeg'

type Params = {
    id: string
}

const LojaPage: FunctionComponent = () => {
    const { id } = useParams<Params>()

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
    )

    return(
        <Base>
        <img className="logo-Anne" src={annelouise} alt="logo"/>
        <h1> {loja?.nome}</h1>
        <p> Destaques / Lançamentos </p>
        <div className="slider-annelou">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={gloss} className="d-block w-100" alt="..." height="450" />
                    </div>
                    <div className="carousel-item">
                        <img src={aromatizador} className="d-block w-100" alt="..."height="450"/>
                    </div>
                    <div className="carousel-item">
                        <img src={mascaracilios} className="d-block w-100" alt="..."height="450"  />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        <p className="prod-catal">Produtos / Catálogo</p>
            <div className="produtos-anne">
                <ul>
                    {produtos.map((produto) =>{
                        return (
                            <li>
                                <h2>{produto.nome}</h2>
                                <h3>{produto.preco}</h3>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </Base>
    )
}


export default LojaPage;