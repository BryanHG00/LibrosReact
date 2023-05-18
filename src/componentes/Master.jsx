import { Outlet } from "react-router"
import { TituloLogo } from "./headerSI"
import '../../public/css/styles.css';
export const Master = () =>{
    return (
        <>
            <TituloLogo />
            
            <Outlet />
        </>
    )
}