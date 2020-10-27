import React, { useState } from 'react';
import '../styles/auth.css'
import { HashLink as Link } from 'react-router-hash-link';
import { useHistory } from 'react-router-dom';

const Login = (props) => {

  const setUser = props.user;

  const [loginInfo, setLoginInfo] = useState({
    correo: '',
    password: '',
    existeUsuario: true,
    correctPassword: true,
  })

  const history = useHistory()

  async function onSubmit(e) {
    e.preventDefault();
    setLoginInfo({ ...loginInfo, ...{ existeUsuario: true } })
    setLoginInfo({ ...loginInfo, ...{ correctPassword: true } })

    try {
      let user = await (await fetch(`/api/users/${loginInfo.correo}`)).json()

      if (user.clave === loginInfo.password) {
        localStorage.setItem('user', JSON.stringify(user))
        setUser(user)
        history.push('/')
      }
      else {
        setLoginInfo({ ...loginInfo, ...{ correctPassword: false } })

      }

    } catch (error) {
      setLoginInfo({ ...loginInfo, ...{ existeUsuario: false } })

    }

  }


  return (

    <section id="Login" >
      <div className="container login-container" >
        <div className="row justify-content-center">
          <div className="col-md-6 login-form-1">
            <h3>Hola! Bienvenido de nuevo</h3>
            <form onSubmit={onSubmit} id="login-form">
              <div className="form-group">
                <input
                  id="login-email"
                  type="email"
                  className="form-control"
                  placeholder="Correo *"
                  value={loginInfo.correo}
                  onChange={e => {
                    setLoginInfo({ ...loginInfo, ...{ correo: e.target.value } })
                  }}
                  defaultValue=""
                  required
                />
              </div>
              <div
                className={loginInfo.existeUsuario ?
                  " d-none " : 'd-block m-2 font-weight-bold warning-red'}
              >
                ¡No se encontró un usuario con este correo!
              </div>
              <div className="form-group">
                <input
                  id="login-password"
                  type="password"
                  className="form-control"
                  placeholder="Contraseña *"
                  defaultValue=""
                  value={loginInfo.password}
                  onChange={e => {
                    setLoginInfo({ ...loginInfo, ...{ password: e.target.value } })
                  }}
                  required
                />
              </div>
              <div
                className={loginInfo.correctPassword ?
                  " d-none " : 'd-block m-2 font-weight-bold warning-red'}
              >
                Contraseña incorrecta
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  id="loginbtn"
                  className="btnSubmit btn btn-primary btn-block"
                  defaultValue="Ingresar"
                />
              </div>
              <div className="form-group">
                <a href="olvidaste-contrasenia" className="ForgetPwd">Olvidaste tu contraseña?</a>
              </div>
              <div className="form-group">
                <Link id="registerLink" className="ForgetPwd" to="/register">Registrate Aqui</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

  );

}

export default Login;