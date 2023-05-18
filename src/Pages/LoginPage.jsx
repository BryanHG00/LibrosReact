import { Link, useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import propTypes from 'prop-types';

export const LoginPage = ({logged = false}) => {
  const navigate = useNavigate();

  useEffect(function(){
      //cambiar a negado, por el momento solo es para ver el diseño de la página
      if(!logged){
          navigate('/Inicio',{
              state:{
                logged: true
              }
          })
      }
  });


  const [isChecked, setIsChecked] = useState(false);
  const [username, setUserName] = useState("");

  const cambioTexto = (e) =>{
    const value = e.target.value
    setUserName(value)
  }

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="loginPadre">
      <h1 className="txtCentrado titulo">Iniciar sesión</h1>
      <hr></hr>
      <form className="formLogin">
        <label htmlFor="" className="txtCentrado">Usuario o correo electronico</label>
        <input 
          className="formLogin-input txtCentrado" 
          id="username" 
          name="username"
          type="text" 
          value={username} 
          onChange={cambioTexto}
          required
          autoComplete="off"
        />
        <label htmlFor="" className="txtCentrado">Contraseña</label>
        <input 
          className="formLogin-input txtCentrado" 
          id="pass" 
          name="pass"
          type={isChecked ? "text" : "password"}
          required
          autoComplete="off"
        />

        <div className="txtCentrado">
          <input type="checkbox" name="Mostrar contraseña" id="mc" checked={isChecked} onChange={handleOnChange}/>
          <label htmlFor="mc">Mostrar contraseña</label>
        </div>

        <input className="formLogin-inputBtn" type="submit" value="Iniciar sesión"/>

        <Link className="txtCentrado" to="/Register">Crear una cuenta</Link>
      </form>
    </div>
  )
}
LoginPage.propTypes = {
  logged: propTypes.bool.isRequired
}