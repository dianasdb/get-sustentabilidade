import { Link } from 'react-router-dom';
import annelouise from '../img/annelouise.jpeg';
import jausei from '../img/jausei.jpeg';
import chaodecasa from '../img/chaodecasa.jpeg';
import divinafulo from '../img/divinafulo.jpeg';
import pachamama from '../img/pachamama.jpeg';
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
                        <p>Anne Louise</p>
                    </Link>

                    <Link to="/jausei">
                        <button className="home-marcasbutton">
                            <img className="home-marcaslogo" src={jausei} alt="Logo Anne Louise"/>
                        </button>
                        <p>Já usei</p>
                    </Link>

                    <Link to="/chaodecasa">
                        <button className="home-marcasbutton">
                            <img className="home-marcaslogo" src={chaodecasa} alt="Logo Anne Louise"/>
                        </button>
                        <p>Chão de Casa</p>
                    </Link>

                    <Link to="/divinafulo">
                        <button className="home-marcasbutton">
                            <img className="home-marcaslogo" src={divinafulo} alt="Logo Anne Louise"/>
                        </button>
                        <p>Divina Fulô</p>
                    </Link>

                    <Link to="/pachamama">
                        <button className="home-marcasbutton">
                            <img className="home-marcaslogo" src={pachamama} alt="Logo Anne Louise"/>
                        </button>
                        <p>Pacha Mama</p>
                    </Link>
                </div>
                <div>
                    <div className="home-projeto">
                        <h2>Conheça o projeto</h2>
                    </div>
                    <div className="home-video">
                        <Link to="">
                            <iframe width="1342" height="515" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;