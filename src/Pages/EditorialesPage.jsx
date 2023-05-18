import { HeaderSI } from "../componentes/headerSI";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import {  useEffect, useState } from "react";
import axios from 'axios';


export const EditorialesPage = () =>{
    const Location = useLocation();

    const [editoriales, setEditoriales] = useState([]);

    async function fetchData(){
        try{
                const response = await axios.get('http://localhost:4000/api//editorial')
                setEditoriales(response.data)
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
            <h1 className="txtCentrado titulo loginPadre">Editoriales</h1>
            <div className="contenedorEditoriales">
                {editoriales.map((item, index) => (
                    <Link key={index} to={"/editoriales/"+item.id_editorial} state={{editorial:item}} >
                    {item.nombreEditorial}
                    </Link>
                ))}
            </div>
        </>
    )
}