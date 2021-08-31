import './anne.css';
import annelouise from '../img/annelouise.jpeg'
import gloss from '../img/gloss.jpeg'
import aromatizador from '../img/aromatizador.jpeg'
import mascaracilios from '../img/mascaracilios.jpeg'
import gloss2 from '../img/gloss2.jpeg'
import mascaraflor from '../img/mascaraflor.jpeg'
import lip from '../img/lip.jpeg'
import Base from '../../component/page/base'

const Anne = () => {
    return (
        <Base>
        <img className="logo-Anne" src={annelouise} alt="logo"/>
        <h1>Anne Louise</h1>
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
                  
                    <img src ={gloss}  className="gloss"  alt="batom cremoso" />
                    <h2>Titulo</h2>
                    <h3>preço</h3>
                
                <img src ={gloss2} className="gloss2" alt="batom cremoso"/>
                <img src ={mascaracilios} className="rimel" alt="rímel" />
                <img src ={lip} className="lip" alt= "batons"/>
                <img src ={aromatizador} className="aromatizador" alt="perfume para ambientes"/>
                <img src ={mascaraflor} className="mascaraflor"  alt="rímel"/> 

            
            </div>
        );


        </Base>
    )
}

export default Anne;