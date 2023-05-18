import { useEffect } from "react";
import { HeaderSI } from "../componentes/headerSI";
import { useNavigate } from "react-router";
import { useLocation } from "react-router";
import propTypes from 'prop-types';


export const Inicio = ({logged = false, nombre = "Constantine"}) =>{
    const navigate = useNavigate();
    const Location = useLocation();

    useEffect(function(){
        //cambiar a negado, por el momento solo es para ver el diseño de la página
        if(!Location.state.logged){
            console.log("entro en el otro")
            navigate('/Login',{
                replace: true,
                state:{
                    logged: false,
                    log: "ola"
                }
            })
        }else{
            logged = true;
        }
    });

    return(
        <HeaderSI nombre={nombre} />
        
    );
    
}

Inicio.propTypes = {
    logged: propTypes.bool.isRequired,
    nombre: propTypes.string.isRequired
}