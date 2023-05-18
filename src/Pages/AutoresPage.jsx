import { HeaderSI } from "../componentes/headerSI";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import {  useEffect, useState } from "react";
import axios from 'axios';

export const Autores = () =>{
    const Location = useLocation();

    const [autores, setAutores] = useState([]);

    async function fetchData(){
        try{
            const response = await axios.get('http://localhost:4000/api/AutorID')
            setAutores(response.data)
            console.log(response.data);
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
    fetchData();
    }, []);

    return(
        <>
            <HeaderSI nombre={Location.state.nombre} />
            <h1 className="txtCentrado titulo loginPadre">Autores</h1>
            <div className="contenedorEditoriales">
                {autores.map((item, index) => (
                    <Link key={index} to={"/Autores/"+item.id_autor} state={{id_autor:item.id_autor}} >
                    {item.Nombre_completo}
                    </Link>
                ))}
            </div>
        </>
    );
}