import React, { useState } from "react";
import { ResponsiveEmbed } from "react-bootstrap";
import SimpleMap from "./SimpleMap";

const DonationForm = () => {
  const [maps, setMaps] = useState(false);

  const [incorrect, setIncorrect] = useState(false);

  const [created, setCreated] = useState(false);

  function resetFormDonacion() {
    let tipoDonacion = document.getElementById("tipo-donacion");
    let form = tipoDonacion.parentNode.parentNode;

    while (form.firstElementChild !== form.lastElementChild) {
      form.removeChild(form.lastElementChild);
    }
  }

  function addTipoYBoton() {
    //Tipo receptor
    let receptor = document.createElement("div");
    receptor.classList.add("form-group");
    receptor.classList.add("input-group");
    receptor.innerHTML = `<div class="input-group-prepend">
        <span class="input-group-text">
          <i class="fas fa-home"></i>
        </span>
      </div>
      <select class="form-control" id="tipo-receptor" required>
        <option selected="" value="">¿Deseas donar a una fundación?</option>
        <option value="si">Si</option>
        <option value="no">No, prefiero donar directamente a personas que lo necesitan</option>
      </select>`;
    document.getElementById("donacion").appendChild(receptor);

    //Botón
    // let button = document.createElement("button");
    // button.type = "button";
    // button.id = "donarbtn";
    // button.classList.add("btn");
    // button.classList.add("btn-primary");
    // button.classList.add("btn-block");
    // button.textContent = "Donar";

    let Donarbutton = document.getElementById("donarbtn");
    Donarbutton.addEventListener("click", showMaps);
    //document.getElementById("donacion").appendChild(Donarbutton);
  }

  function validarFormulario() {
    let tipoDonacion = document.getElementById("tipo-donacion");

    let tipo = tipoDonacion.value;
    let form = document.getElementById("donacion");
    if (tipo === "¿Qué deseas donar?") {
      return false;
    }
    if (tipo === "Ropa") {
      console.log("AAAAAAAAAAAAAA", typeof tipoDonacion, typeof form);
      console.log(form.checkValidity());
      if (form.checkValidity() === false) {
        return false;
      }
    } else {
      if (form.checkValidity() === false) {
        return false;
      }
    }
    return true;
  }

  function showMaps() {
    if (validarFormulario()) {
      let receptor = document.getElementById("tipo-receptor");
      setIncorrect(false);
      console.log(receptor.value);
      if (receptor.value === "si") {
        setMaps(true);
      } else {
        setMaps(false);
      }
      console.log("ACÄ NO ");
      postDonation();
      return;
    }
    setIncorrect(true);
    console.log("ESTAMOS AQUí ESTAMOS AQUí", incorrect);
  }

  async function postDonation() {
    let tipoDonacion = document.getElementById("tipo-donacion").value;
    let body = {};
    let fundacion;
    console.log(document.getElementById("tipo-receptor").value)
    if(document.getElementById("tipo-receptor").value == "si"){
      fundacion = true;
    } else {
      fundacion = false;
    }
    if (tipoDonacion === "Ropa") {
      body = {
        tipo: "ropa",
        estado: document.getElementById("estado-ropa").value,
        genero: document.getElementById("genero-ropa").value,
        edad: document.getElementById("edad-ropa").value,
        fundacion: fundacion,
          
      };
    } else if (tipoDonacion === "Comida") {
      body = {
        tipo: "comida",
        edad: document.getElementById("tipo-persona").value,
        estado: document.getElementById("tipo-comida").value,
        fundacion: fundacion,
         
      };
    } else if (tipoDonacion === "Dinero") {
      body = {
        tipo: "dinero",
        cant: document.getElementById("monto-dinero").value,
        mod: document.getElementById("modo-pago").value,
        fundacion: fundacion,
          
      };
    } else {
      body = {
        tipo: "otro",
        descripcion: document.getElementById("otros-value").value,
        fundacion: fundacion
      };
    }
    console.log("LE BODY", body)
    const header = { "Content-Type": "application/json" };
    let donation = await await fetch("/api/donations/", {
      method: "POST",
      headers: header,
      body: JSON.stringify(body),
    });
    if (donation.ok && donation.status === 200) {
      setCreated(true);  
      setTimeout(()=>{
        setCreated(false);
      },3000)
    }
  }

  function modifyDonationForm() {
    let tipoDonacion = document.getElementById("tipo-donacion");
    console.log(document.getElementById("mapa"));
    setMaps(false);
    setIncorrect(false);
    let tipo = tipoDonacion.value;
    if (tipo === "¿Qué deseas donar?") {
      //Caso ninguna
      resetFormDonacion();
    } else if (tipo === "Ropa") {
      //Caso ropa
      resetFormDonacion();
      let estado = document.createElement("div");
      estado.classList.add("form-group");
      estado.classList.add("input-group");
      estado.innerHTML = `<div class="input-group-prepend">
          <span class="input-group-text">
              <i class="fas fa-tshirt"></i>
          </span>
        </div>
        <select class="form-control" id="estado-ropa" required>
          <option selected="" value="">¿En qué estado se encuentra?</option>
          <option>Usada</option>
          <option>Nueva</option>
          <option>Tengo de ambos tipos</option>
        </select>`;

      let genero = document.createElement("div");
      genero.classList.add("form-group");
      genero.classList.add("input-group");
      genero.innerHTML = `<div class="input-group-prepend">
          <span class="input-group-text">
            <i class="fas fa-venus-mars"></i>
          </span>
        </div>
        <select class="form-control" id="genero-ropa" required>
          <option selected="" value="">¿A quién le sirve la ropa?</option>
          <option>Mujeres</option>
          <option>Hombres</option>
          <option>Ambos</option>
        </select>`;

      let persona = document.createElement("div");
      persona.classList.add("form-group");
      persona.classList.add("input-group");
      persona.innerHTML = `<div class="input-group-prepend">
          <span class="input-group-text">
            <i class="fas fa-user-friends"></i>
          </span>
        </div>
        <select class="form-control" id="edad-ropa" required>
          <option selected="" value="">¿A que tipo de persona?</option>
          <option>Niños</option>
          <option>Adultos</option>
          <option>Ambos</option>
        </select>`;
      //Agregar los elementos al html
      const form = document.getElementById("donacion");
      form.appendChild(estado);
      form.appendChild(genero);
      form.appendChild(persona);
      addTipoYBoton();
    } else if (tipo === "Comida") {
      //Caso comida
      resetFormDonacion();

      let receptor = document.createElement("div");
      receptor.classList.add("form-group");
      receptor.classList.add("input-group");
      receptor.innerHTML = `<div class="input-group-prepend">
          <span class="input-group-text">
            <i class="fas fa-user-friends"></i>
          </span>
        </div>
        <select class="form-control" id="tipo-persona" required>
          <option selected="" value="">¿A quién quisieras donar?</option>
          <option>Niños</option>
          <option>Adultos/Ancianos</option>
          <option>Cualquiera</option>
        </select>`;

      let tipoComida = document.createElement("div");
      tipoComida.classList.add("form-group");
      tipoComida.classList.add("input-group");
      tipoComida.innerHTML = `<div class="input-group-prepend">
        <span class="input-group-text">
          <i class="fas fa-utensils"></i>
        </span>
      </div>
      <select class="form-control" id="tipo-comida" required>
        <option selected="" value="">¿Qué tipo de comida es?</option>
        <option>Lista para consumir</option>
        <option>Requiere preparación</option>
        <option>Tengo de ambos tipos</option>
      </select>`;

      //Agregar los elementos al html
      const form = document.getElementById("donacion");
      form.appendChild(receptor);
      form.appendChild(tipoComida);
      addTipoYBoton();
    } else if (tipo === "Dinero") {
      //Caso dinero
      resetFormDonacion();
      let monto = document.createElement("div");
      monto.classList.add("form-group");
      monto.classList.add("input-group");
      monto.innerHTML = `<div class="input-group-prepend">
        <span class="input-group-text">
          <i class="fas fa-dollar-sign"></i>
        </span>
      </div>
      <input required type="number" value="50000" min="1000" step="1000" data-number-to-fixed="2" data-number-stepfactor="1000" class="form-control currency" id="monto-dinero" />`;
      /*     if(pagos.style.display==="none"){
        pagos.style.display="block"
      } */
      let modoPago = document.createElement("div");
      modoPago.classList.add("form-group");
      modoPago.classList.add("input-group");
      modoPago.innerHTML = `<div class="input-group-prepend">
        <span class="input-group-text">
          <i class="fas fa-money-bill-wave"></i>
        </span>
      </div>
      <select class="form-control" id="modo-pago" required>
        <option selected="" value="">¿Qué modalidad prefieres?</option>
        <option>Directamente con el beneficiario</option>
        <option>Pago online inmediato</option>
      </select>
      `;

      //Agregar los elementos al html
      const form = document.getElementById("donacion");
      form.appendChild(monto);
      form.appendChild(modoPago);
      addTipoYBoton();
    } else {
      //Caso otros
      resetFormDonacion();

      let otro = document.createElement("div");
      otro.classList.add("form-group");
      otro.innerHTML = `<label for="otros-value">Por favor especifica que deseas donar</label>
      <textarea required class="form-control" id="otros-value" rows="3"></textarea>`;

      //Agregar los elementos al html
      const form = document.getElementById("donacion");
      form.appendChild(otro);
      addTipoYBoton();
    }
  }

  return (
    <div>
      <section id="donation">
        <a name="Donar"></a>
        <div className="card bg-light" id="donationDiv">
          <article className="card-body mx-auto" style={{ maxwidth: "400px" }}>
            <a name="Registro"></a>
            <h4 className="card-title mt-3 text-center">
              ¿Quieres realizar una donación?
            </h4>
            <p className="text-center">¡Gracias por ayudar!</p>
            <form id="donacion">
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-hand-holding-usd"></i>
                  </span>
                </div>
                <select
                  className="form-control"
                  id="tipo-donacion"
                  onChange={modifyDonationForm}
                >
                  <option defaultValue="">¿Qué deseas donar?</option>
                  <option>Ropa</option>
                  <option>Comida</option>
                  <option>Dinero</option>
                  <option>Otros</option>
                </select>
              </div>
            </form>

            {incorrect && (
              <label className="incorrect" id="lbl-incorrect">
                Asegúrate de llenar todos los campos correctamente
              </label>
            )}

            <button
              onChange={showMaps}
              type="button"
              id="donarbtn"
              className="btn btn-primary btn-block"
            >
              Donar
            </button>
            {created && (
              <label style={{color: 'green'}}>
                Donación creada correctamente
              </label>
            )}
          </article>
        </div>
      </section>
      {maps && <SimpleMap id="mapa"></SimpleMap>}
    </div>
  );
};

export default DonationForm;
