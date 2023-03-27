import React, {useState, useEffect} from 'react';
import GoogleLogin, {GoogleLogout} from 'react-google-login';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';
import {gapi} from 'gapi-script'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import ReCAPTCHA from 'react-google-recaptcha';


function Login(){

    const key_login = "256337036389-m7kod154bkr58v44g8qchbs07rrgqn3t.apps.googleusercontent.com";

    const [user, setUser] = useState({tipo_login: 'ninguno'})


    //Todavía no funciona
    useEffect(() => {
      const start = () =>{
        gapi.Auth2.init({
          clientId: key_login
        })
      }
      gapi.load("client:auth2", start)
    }, [])    


    const login_google = (respuesta_exitosa) => 
      {
         setUser({...respuesta_exitosa.profileObj, tipo_login: 'google'})
         Swal.fire({
          icon: 'success',
          title: 'Bienvenido',
          text: '¡Ingresado con éxito!',
        })
      }
    const fallo_login = (res) => 
      {
          Swal.fire({
            icon: 'error',
            title: 'Algo salió mal...',
            text: 'Hubo un problema al iniciar sesión',
          })
      }
      const logout=()=>{
        console.log("SESIÓN TERMINADA GONZÁLEZ URRUTIA");
        Swal.fire({
          icon: 'success',
          title: 'Adiós',
          text: 'Sesión cerrada con éxito',
        })  
        setUser({tipo_login: 'ninguno'})
      } 

      const login_facebook = (response) => {
        setUser({...response, tipo_login: 'facebook'})
        Swal.fire({
          icon: 'success',
          title: 'Bienvenido',
          text: '¡Ingresado con éxito!',
        })

      }

      //Creando el contenido que se va a renderizar en la página de manera condicional
      let loginRender
      
      //Si el usuario no se ha logeado, se renderizará el formulario de login, en caso de que se encuentre logeado, se renderizará una de las tarjetas de usuario
      if(user.tipo_login === 'ninguno'){ //Si el usuario aún no se ha logeado
        loginRender = (
          <>
            <h2 className='login-title mt-3 mb-3'>Login</h2>

            <form className='login mb-4'>
              {/* <h2 className='login-title'>App Parcial 2</h2> */}
              <div className='login-group'>
                  <label htmlFor='correo'>Correo:</label><br />
                  <input placeholder='Ingresa tu correo electrónico' name='correo' id='correo'/>
              </div>
              <div className='login-group'>
                  <label htmlFor='pass'>Contraseña:</label><br />
                  <input placeholder='Ingresa tu correo electrónico' name='pass' id='pass'/>
              </div>
              <div className='login-check'>
                <div><input type='checkbox' name='recordarme' id='recordarme'/><label id='recordarme' className='ms-3' htmlFor='recordarme'>Recordarme</label></div>
                <Link>¿Olvidaste tu contraseña?</Link>
              </div>
              <button className='login-button shadow'>Ingresar</button>
              <div className='login-register text-center'>
                <p>¿No eres usuario?<Link className='ms-2'>Registrate</Link></p>
                <p>O ingresa con: </p>
                <p>
                    <GoogleLogin
                      clientId={key_login}
                      buttonText="INGRESAR"
                      onSuccess={login_google}
                      onFailure={fallo_login}
                      cookiePolicy={'single_host_origin'}
                      isSignedIn={false}
                      autoLoad={false}
                      // redirectUri='https://www.hackerutd.online/gonzalezu/login'
                      render={(renderProps) =>(
                        <FontAwesomeIcon icon={faGoogle} onClick={renderProps.onClick} className={`login-icon ${renderProps.disabled && 'icon-disabled'}`}></FontAwesomeIcon>
                      )}
                    />
                    <FacebookLogin
                      appId="155323180720237"
                      autoLoad={false}
                      fields="name,email,picture"
                      // onClick={componentClicked}
                      callback={login_facebook}
                      onFailure={fallo_login}
                      render={(renderProps) =>(
                        <FontAwesomeIcon icon={faFacebook} onClick={renderProps.onClick} className={`ms-4 login-icon ${renderProps.isDisabled && 'icon-disabled'}`}></FontAwesomeIcon>
                      )}
                    />
                  </p>
                  <div className='d-flex justify-content-center pt-2'>
                    <ReCAPTCHA
                      sitekey="6Lf0DzglAAAAAK1yFJc_CsTuErpCKVCoDWXly6CB"
                    />
                  </div>
              </div>
            </form>
          </>
        )
      }else{
        if(user.tipo_login === 'google'){ // Si el usuario se ha logeado con google
          loginRender = (
            <div className='user-card'>
              <img src={user.imageUrl} alt='Imagen de usuario'></img>
              <p className='title'>Tus credenciales de Google son:</p>
              <p><b>Nombre: </b>{user.name}</p>
              <p><b>Email: </b>{user.email}</p>
              <GoogleLogout
                clientId={key_login}
                buttonText={"CERRAR SESIÓN"}
                onLogoutSuccess={logout}
                className='mt-2'
              /> 
            </div>
          )
        }else if(user.tipo_login === 'facebook'){ //Si el usuario se ha logeado con facebook
          loginRender = (
            <div className='user-card'>
              <img src={user.picture.data.url} alt='Imagen de usuario'></img>
              <p className='title'>Tus credenciales de Facebook son:</p>
              <p><b>Nombre: </b>{user.name}</p>
              <p><b>Email: </b>{user.email}</p>
              <button className='logout logout-facebook mt-2' onClick={logout}><FontAwesomeIcon icon={faFacebook} className={'me-4'}></FontAwesomeIcon> CERRAR SESIÓN</button>
            </div>
          )
        }

      }
  
   return(
    <div className='wrapper-center'>  
      {loginRender}
    </div>      
   )   
}      
export default Login;