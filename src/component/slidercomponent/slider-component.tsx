import Imagem1 from '../../pages/img/slide1.jpg'
import Imagem2 from '../../pages/img/slide2.jpg'
import Imagem3 from '../../pages/img/slide3.jpg'



const SliderComponent = () => {
    return (
        <div className="slider-main">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Imagem1} className="d-block w-100" alt="..." height="350px"/>
                    </div>
                    <div className="carousel-item">
                        <img src={Imagem2} className="d-block w-100" alt="..." height="350px"/>
                    </div>
                    <div className="carousel-item">
                        <img src={Imagem3} className="d-block w-100" alt="..." height="350px"/>
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
    );
}


export default SliderComponent;