import { Routes, Route } from "react-router"
import {  LoginPage, RegisterPage } from "../Pages"
import {EditorialesPage} from "../Pages/EditorialesPage"
import { Autores } from "../Pages/AutoresPage"
import { AutoresInfo } from "../Pages/AutorInfo"
import { Master } from "../componentes/Master"
import { Inicio } from "../Pages/Inicio"
import { EditorialInfo } from "../Pages/EditorialInfo"
export const AppRouter = () =>{

    return(
        <>
        <Routes>
            <Route path="/" element={<Master />}>
                <Route index element={<LoginPage />}/>
                <Route path='Register' element={<RegisterPage />}/>
                <Route path='Login' element={<LoginPage />}/>
                <Route path='Inicio' element={<Inicio />}/>
                <Route path='Editoriales' element={<EditorialesPage />}/>
                <Route path='Editoriales/:id' element={<EditorialInfo />}/>
                <Route path='Autores' element={<Autores />}/>
                <Route path='Autores/:id' element={<AutoresInfo />}/>
            </Route>
        </Routes>
        </>
    )
}