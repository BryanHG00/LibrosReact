import { HeaderSI } from "../componentes/headerSI";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import {  useEffect, useState } from "react";
import axios from 'axios';

export const GeneroPage = () =>{
    const Location = useLocation();

    const [Genero, setGenero] = useState([]);

    async function fetchData(){
        try{
                const response = await axios.get('http://localhost:4000/api/Genero')
                setGenero(response.data)
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
            <h1 className="txtCentrado titulo loginPadre">Genero</h1>
            <div className="contenedorEditoriales">
                {Genero.map((item, index) => (
                    <Link key={index} to={"/Genero/"+item.id_genero} state={{id_genero:item.id_genero, genero: item.nombreGenero}} >
                    {item.nombreGenero}
                    </Link>
                ))}
            </div>
        </>
    )
}