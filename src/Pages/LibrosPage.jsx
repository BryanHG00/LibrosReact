import { HeaderSI } from "../componentes/headerSI";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import {  useEffect, useState } from "react";
import axios from 'axios';

export const LibrosPage = () =>{
    const Location = useLocation();

    const [libros, setLibros] = useState([]);

    async function fetchData(){
        try{
                const response = await axios.get('http://localhost:4000/api/Libros')
                setLibros(response.data)
                console.log(response.data);
        }catch(errror){
            console.log(errror)
        }
    }

    useEffect(() => {
        fetchData();

      }, []);

    return(
        <>
            <HeaderSI nombre={Location.state.nombre} />
            <h1 className="txtCentrado titulo loginPadre">Libros</h1>
            <div  className="contenedorLibrosgrl">
                
                {libros.map((item, index) => (
                    <div className="ele" key={index}>
                    <Link className="libroItemOf" to={"/Libros/"+item.id_libro}>
                        <img  className="caratulaAI" src={item.caratulaurl} ></img>
                        <p>{item.titulo}</p>
                    </Link>
                    </div>
                ))}
                
                
            </div>
        </>
    )
}