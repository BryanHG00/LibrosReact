import { HeaderSI } from "../componentes/headerSI";
import { useLocation } from "react-router";
import {  useEffect, useState } from "react";
import axios from 'axios';

export const LibrosInfo = () =>{
    const Location = useLocation();
    const [id_lib, setId_lib] = useState(0);
    const [extras, setExtras] = useState([]);
    const [libros, setLibros] = useState([]);
    async function fetchData(){
        try{
            const response = await axios.get('http://localhost:4000/api/Libro/' + Location.state.id_libro)
            setLibros(response.data);
        }catch(error){
            console.log(error)
        }
    }

    async function fetchExtras(){
        const res = await axios.get('http://localhost:4000/api/LibroExtras/' + id_lib)
        setExtras(res.data);
        console.log(res.data);
    }

    useEffect(() => {
    fetchData();
    setId_lib(libros.id_libro);
    fetchExtras();
    },id_lib);

    //tomar el location y hacer la consulta


    return(
        <>
                <HeaderSI />
                <div className="contenedorAutores">
                    <div className="AutoresIzquierda">
                        <img src={libros.caratulaurl} alt="Logo editorial" />
                    </div>
                    <div className="AutoresDerecha">
                        <h1>Título: {libros.titulo}</h1>
                        <h3>Autor: {extras.Autor}</h3>
                        <h3>Editorial: {extras.Editorial}</h3>
                        <h4>ISBN: {libros.ISBN}</h4>
                        <h3>Sinopsis: </h3>
                        <p>{libros.sinopsis}</p>
                    </div>
                    
                </div>
                
        </>

    )
}