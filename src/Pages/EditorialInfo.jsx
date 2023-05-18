import { useState, useEffect } from "react";
import { HeaderSI } from "../componentes/headerSI";
import { useLocation } from "react-router";
import axios from 'axios';
import { Link } from "react-router-dom";

export const EditorialInfo = () =>{
    const Location = useLocation();
    const [editorial] = useState([Location.state.editorial]);
    const [libros, setLibros] = useState([]);

    async function fetchData(){
        try{
            console.log(editorial[0])
            const response = await axios.get('http://localhost:4000/api/librosxEditorial/'+ editorial[0].id_editorial)
            setLibros(response.data);
            console.log(response.data)
            
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData();
    },[]);
    return(
        <>
                <HeaderSI />
                <div className="contenedorEditorial">
                    <div className="EditorialIzquierda">
                        <img src={editorial[0].urlimagen} alt="Logo editorial" />
                    </div>
                    <div className="EditorialDerecha">
                        <h1>{editorial[0].nombreEditorial}</h1>
                        <a href={editorial[0].sitioWeb}>Página oficial</a>
                        <h3>Libros publicados</h3>
                        <div  className="contenedorLibrosEditorial">
                            {libros.map((item, index) => (
                                <Link className="libroItem" key={index}>
                                    <img  className="caratulaAI" src={item.caratulaurl} ></img>
                                    <p>{item.titulo}</p>
                                </Link>
                            ))}
                        </div>
                        
                    </div>
                    
                </div>
                
        </>

    )
}