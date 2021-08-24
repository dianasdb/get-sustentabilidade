import { Link } from 'react-router-dom';
import annelouise from '../img/annelouise.jpeg';
import SliderComponent from '../../component/slidercomponent/slider-component';
import './home.css';

const Home = () => {
    return(
        <>
            <div>
                <SliderComponent/>
            </div>
            <div>
                <h2 className="home-marcastitulo">Marcas</h2>
                <div className="home-marcasdiv">
                    <Link to="/annelouise">
                        <button className="home-marcasbutton">
                            <img className="home-marcaslogo" src={annelouise} alt="Logo Anne Louise"/>
                        </button>
                        <p>Anne Louse</p>
                        <p>Conheça o Projeto Coriolis</p>
                    </Link>
                    <Link to="/annelouise">
                        <button className="home-marcasbutton">
                            <img className="home-marcaslogo" src={annelouise} alt="Logo Anne Louise"/>
                        </button>
                        <p>Anne Louse</p>
                        <p>Conheça o Projeto Coriolis</p>
                    </Link>
                    <Link to="/annelouise">
                        <button className="home-marcasbutton">
                            <img className="home-marcaslogo" src={annelouise} alt="Logo Anne Louise"/>
                        </button>
                        <p>Anne Louse</p>
                        <p>Conheça o Projeto Coriolis</p>
                    </Link>
                    <Link to="/annelouise">
                        <button className="home-marcasbutton">
                            <img className="home-marcaslogo" src={annelouise} alt="Logo Anne Louise"/>
                        </button>
                        <p>Anne Louse</p>
                        <p>Conheça o Projeto Coriolis</p>
                    </Link>
                    <Link to="/annelouise">
                        <button className="home-marcasbutton">
                            <img className="home-marcaslogo" src={annelouise} alt="Logo Anne Louise"/>
                        </button>
                        <p>Anne Louse</p>
                        <p>Conheça o Projeto Coriolis</p>
                    </Link>
                </div>
                <div>
                    <div>
                        <h2>Conheça o projeto</h2>
                    </div>
                    <div>
                        <Link to="">
                            <img className="" src={annelouise} alt="Logo Anne Louise" width="100%" height="450px"/>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;