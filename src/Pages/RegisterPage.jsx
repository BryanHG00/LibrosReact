import { Link } from "react-router-dom"
import { useState } from "react";

export const RegisterPage = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="loginPadre">
      <h1 className="txtCentrado titulo">Crear cuenta</h1>
      <hr></hr>
      <form className="formLogin">
        <label htmlFor="" className="txtCentrado">Nombre de usuario</label>
        <input className="formLogin-input txtCentrado" id="username" type="text" />

        <label htmlFor="" className="txtCentrado">Email</label>
        <input className="formLogin-input txtCentrado" id="correo" type="email" />

        <label htmlFor="" className="txtCentrado">Nombre</label>
        <input className="formLogin-input txtCentrado" id="nombre" type="text" />

        <label htmlFor="" className="txtCentrado">Apellido</label>
        <input className="formLogin-input txtCentrado" id="apellidos" type="text" />

        <label htmlFor="" className="txtCentrado">Contraseña</label>
        <input className="formLogin-input txtCentrado" id="pass" type={isChecked ? "text" : "password"} />

        <div className="txtCentrado">
          <input type="checkbox" name="Mostrar contraseña" id="mc" checked={isChecked} onChange={handleOnChange}/>
          <label htmlFor="mc">Mostrar contraseña</label>
        </div>
        

        <input className="formLogin-inputBtn" type="button" value="Crear cuenta"/>

        <Link className="txtCentrado" to="/Login">Iniciar sesión</Link>
      </form>
    </div>
  )
}
