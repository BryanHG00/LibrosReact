import { Routes, Route } from "react-router"
import {  LoginPage, RegisterPage } from "../Pages"
import {EditorialesPage} from "../Pages/EditorialesPage"
import { Autores } from "../Pages/AutoresPage"
import { AutoresInfo } from "../Pages/AutorInfo"
import { Master } from "../componentes/Master"
import { Inicio } from "../Pages/Inicio"
import { GeneroPage } from "../Pages/GeneroPage"
import { EditorialInfo } from "../Pages/EditorialInfo"
import { GeneroInfo } from "../Pages/GeneroInfo"
import { LibrosPage } from "../Pages/LibrosPage"
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
                <Route path='Genero' element={<GeneroPage />}/>
                <Route path='Genero/:id' element={<GeneroInfo />}/>
                <Route path='Libros' element={<LibrosPage />}/>
                <Route path='Libros/:id' element={<LibrosPage />}/>

            </Route>
        </Routes>
        </>
    )
}