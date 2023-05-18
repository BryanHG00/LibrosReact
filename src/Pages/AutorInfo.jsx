import { HeaderSI } from "../componentes/headerSI";
import { useLocation } from "react-router";
import {  useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

export const AutoresInfo = () =>{
    const Location = useLocation();

    async function fetchData(){
        try{
            const response = await axios.get('http://localhost:4000/api/Autor/' + Location.state.id_autor)
            setAutor(response.data);
            console.log(response.data)
        }catch(error){
            console.log(error)
        }
    }

    async function fetchLibros(){
        const res = await axios.get('http://localhost:4000/api/LibroID/' + Location.state.id_autor)
        setLibros(res.data);
        console.log(res.data);
    }

    useEffect(() => {
    fetchData();
    fetchLibros();
    },[]);

    //tomar el location y hacer la consulta
    const [autor, setAutor] = useState(Location.state.id_autor);
    const [libros, setLibros] = useState([]);

    return(
        <>
                <HeaderSI />
                <div className="contenedorAutores">
                    <div className="AutoresIzquierda">
                        <img src={autor.imagenurl} alt="Logo editorial" />
                    </div>
                    <div className="AutoresDerecha">
                        
                        <h1>{autor.nombre} {autor.apellidos}</h1>
                        <h4>Nacionalidad: {autor.abrev} <img className="bandera" src={autor.urlnacionalidad} alt="Logo nacionalidad"/> </h4>
                        <h3>Biografia: </h3>
                        <p id="bio">{autor.bio}</p>
                        <div className="vt"><h3>Libros </h3><span><a href="#" className="vtbtn">Ver todos</a></span></div>
                        <div  className="contenedorLibros">
                            {libros.map((item, index) => (
                                <Link className="libroItem" key={index}>
                                    <img  className="caratulaAI" src={item.caratulaurl} ></img>
                                    <p>{item.titulo}</p>
                                </Link>
                            ))}
                        
                        </div>
                        <h3>Genero del autor</h3>

                        <h3>Últimas reseñas de sus libros</h3>
                        
                    </div>
                    
                </div>
                
        </>

    )
}