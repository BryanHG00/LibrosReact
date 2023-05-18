import { HeaderSI } from "../componentes/headerSI";
import { useLocation } from "react-router";
import {  useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

export const GeneroInfo = () =>{
    const Location = useLocation();

    async function fetchData(){
        try{
            const response = await axios.get('http://localhost:4000/api/LibroxGenero/' + Location.state.id_genero)
            setGenero(response.data);
            console.log(response.data)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
    fetchData();
    },[]);

    //tomar el location y hacer la consulta
    const [genero, setGenero] = useState([]);

    return(
        <>
                <HeaderSI />
                <h1 className="titulo-cat">Categoria: {Location.state.genero}</h1>
                <div className="contenedorGenero">
                        
                    

                    <div  className="contenedorLibros">
                        {genero.map((item, index) => (
                            <Link className="libroItem" key={index}>
                                <img  className="caratulaAI" src={item.caratulaurl} ></img>
                                <p>{item.titulo}</p>
                            </Link>
                        ))}
                    
                    </div>

                </div>
                
        </>

    )
}