import React from 'react';
import '../css/Global.css';
import '../css/notFound.css';
import searchSVG from '../assets/img/icon-search.svg'
import { Link } from 'react-router-dom';


//NotFound Component
const NotFound = () => {
    return (
        <div className="NotFoundMain">
            <div className="NotFoundContainer">
                <div className="searchImg">
                    <img src={searchSVG} alt="search icon" />
                </div>
                <div className="texts">
                    <h1>Parece que você está perdido, certo?</h1>
                    <h2>Que tal voltar para a <Link className="link" to={"/"}><p id="home">página inicial</p></Link>? Tem muita coisa boa por lá!</h2>
                </div>
            </div>
        </div>
    )
}

export default NotFound;