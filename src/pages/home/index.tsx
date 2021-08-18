import './home.css';
import annelouise from '../img/annelouise.jpeg';

const Home = () => {
    return(
        <>
        <p>Marcas</p>
        <button> <a href="/annelouise">
            <img className="anne" src={annelouise} alt="Logo Anne Louise"/></a>
        </button>

        <p>Propósito</p>
        <p>Conheça o Projeto Coriolis</p>
        
        </>
    )
}

export default Home;