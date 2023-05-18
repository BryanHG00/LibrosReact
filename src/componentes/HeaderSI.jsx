import { Link } from "react-router-dom";
import propTypes from 'prop-types';

export function TituloLogo(){
    // Titulo y Logo
    return(
        <div className="Menu">
            <div className="Menu-titulo">S o p a - d e - l e t r a s</div>
            <div className="Menu-logo">
                <img src="../../public/imgs/sopa.png"></img>
            </div>
        </div>
    );
}

export function HeaderSI({ nombre="Sin identificar"}){

    return(
        <>
            <div className="Menu">
                <div className="Menu-contenido">
                    <div className="Menu-contenido-derecha">
                        <Link to='/' className="LinksBtn"><img src="../../public/imgs/home-web.png"></img>Home</Link>
                        <div className="dropdown">
                            <Link to='/libros' state={{logged:true, nombre: nombre}} className="btnLinkCategoria"><img src="../../public/imgs/categoria.png"></img>Libros</Link>
                            <div className="dropdown-Content">
                                <Link to='/'><b>x</b> Genero</Link>
                                <Link to='/Editoriales' state={{logged:true, nombre: nombre}}><b>x</b> Editorial</Link>
                                <Link to='/Autores' state={{logged:true, nombre:nombre}}><b>x</b> Autor</Link>
                                <Link to='/'><b>x</b> Puntaje</Link>
                            </div>
                        </div>
                    </div>
                    <div className="Menu-contenido-izquierda">
                        <Link to='/' className="LinksBtnNT"><img src="../../public/imgs/user.png"></img></Link>
                        <Link to='/' className="LinksBtnNT"><img src="../../public/imgs/logout-web.png"></img></Link>
                    </div>
                </div>
                <div className="NameUser">Bienvenido! {nombre}</div>
            </div>
        </>
    );
}

HeaderSI.propTypes = {
    nombre: propTypes.string.isRequired
}