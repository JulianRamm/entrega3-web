import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/auth.css'
import { useState } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import { useHistory } from "react-router-dom";
import React from 'react';

const Register = (props) => {

  const setUser = props.user;

  const [formInfo, setFormInfo] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    extension: '+57 1',
    telefono: '',
    tipoUsuario: '',
    password: '',
    confirmationPassword: '',
    matchingPasswords: true,
    uniqueEmail: true,
  })
  const history = useHistory();

  async function onSubmit(e) {
    e.preventDefault();
    if (formInfo.password !== formInfo.confirmationPassword) {
      // Warning message 
      setFormInfo({ ...formInfo, ...{ matchingPasswords: false } })
    }
    else {
      setFormInfo({ ...formInfo, ...{ matchingPasswords: true } })
      console.log('Seteado a True');
      const existence = await verifyExistence(formInfo.correo);
      if (existence) {
        // Warning
        setFormInfo({ ...formInfo, ...{ uniqueEmail: false } })
      }
      else {
        // Login
        setFormInfo({ ...formInfo, ...{ uniqueEmail: true } })
        register()
      }
    }

  }

  async function verifyExistence(mail) {
    try {
      let user = await (await fetch(`/api/users/${mail}`)).json()
      return user.email ? true : false;

    } catch (error) {
      return false

    }
  }

  async function register() {
    const body = {
      nombre: formInfo.nombre,
      apellidos: formInfo.apellido,
      email: formInfo.correo,
      telefono: `${formInfo.extension} ${formInfo.telefono}`,
      fundacion: formInfo.tipoUsuario === 'Fundación'? true: false,
      clave: formInfo.password
    }
    const headers =  {'Content-Type': 'application/json'}
    let user = await (await fetch('/api/users', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body)
    })).json()

    localStorage.setItem('user', JSON.stringify(user))
    setUser(user)
    history.push('/')
    
  }

  return (
    <section id="register">
      <div className="card bg-light" id="registerdiv">
        <article className="card-body mx-auto" style={{ maxWidth: "400px" }}>
          <h4 className="card-title mt-3 text-center">Crea tu cuenta</h4>
          <p className="text-center">y empieza a donar!</p>

          <form id="form-registro" onSubmit={onSubmit}>
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-user"></i>
                </span>
              </div>
              <input
                name="name"
                className="form-control"
                placeholder="Nombre"
                value={formInfo.nombre}
                onChange={(e) => {
                  setFormInfo({ ...formInfo, ...{ nombre: e.target.value } })
                }}
                type="text"
                required
              />
              <input
                name="lastname"
                className="form-control"
                placeholder="Apellido"
                value={formInfo.apellido}
                onChange={(e) => {
                  setFormInfo({ ...formInfo, ...{ apellido: e.target.value } })
                }}
                type="text"
                required
              />
            </div>
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-envelope"></i>
                </span>
              </div>
              <input
                name="email"
                className="form-control"
                placeholder="Correo Electrónico"
                value={formInfo.correo}
                onChange={(e) => {
                  setFormInfo({ ...formInfo, ...{ correo: e.target.value } })
                }}
                type="email"
              />
            </div>
            <div
              className={formInfo.uniqueEmail ?
                " d-none " : 'd-block m-2 font-weight-bold warning-red'}
            >
              ¡Ya hay un usuario con este correo!
              </div>
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-phone"></i>
                </span>
              </div>
              <select className="custom-select"
                style={{ maxWidth: "120px" }}
                value={formInfo.extension}
                onChange={(e) => {
                  setFormInfo({ ...formInfo, ...{ extension: e.target.value } })
                }}
              >
                <option >+57 1</option>
                <option >+57 2</option>
                <option >+57 3</option>
                <option >+57 4</option>
                <option >+57 5</option>
                <option >+57 6</option>
                <option >+57 7</option>
                <option >+57 8</option>
              </select>
              <input
                required
                name="phone"
                className="form-control"
                placeholder="Número de Teléfono"
                value={formInfo.telefono}
                onChange={(e) => {
                  setFormInfo({ ...formInfo, ...{ telefono: e.target.value } })
                }}
                type="text"
              />
            </div>
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-building"></i>
                </span>
              </div>
              <select className="form-control"
                required
                value={formInfo.tipoUsuario}
                onChange={(e) => {
                  setFormInfo({ ...formInfo, ...{ tipoUsuario: e.target.value } })
                }}
              >
                <option>Seleccione el tipo de usuario</option>
                <option>Fundación</option>
                <option>Persona Natural</option>
              </select>
            </div>
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-lock"></i>
                </span>
              </div>
              <input
                required
                name="password"
                className="form-control"
                placeholder="Create password"
                value={formInfo.password}
                onChange={(e) => {
                  setFormInfo({ ...formInfo, ...{ password: e.target.value } })
                }}
                type="password"
              />
            </div>
            <div className={formInfo.matchingPasswords ?
              "form-group input-group" : 'form-group input-group  not-matching-passwords'}
            >
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-lock"></i>
                </span>
              </div>
              <input
                required
                className={formInfo.matchingPasswords ?
                  "form-control" : 'form-control no-box-shadow'}
                placeholder="Repeat password"
                value={formInfo.confirmationPassword}
                onChange={(e) => {
                  setFormInfo({ ...formInfo, ...{ confirmationPassword: e.target.value } })
                }}
                type="password"
              />
            </div>
            <div
              className={formInfo.matchingPasswords ?
                "d-none" : 'd-block m-2 font-weight-bold warning-red'}
            >
              ¡Las contraseñas no coinciden!
              </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-block">
                Registrame
              </button>
            </div>
            <p className="text-center">
              Ya tienes una cuenta?
              <Link to='/login' id='IniciarSesionLink'> Inicia sesion </Link>
            </p>
          </form>
        </article>
      </div>
    </section>
  );
};

export default Register;
