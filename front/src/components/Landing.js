import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './Banner'
import SimpleMap from './SimpleMap';
import DonationForm from './DonationForm';
import React from 'react';
const Landing = () =>{
return (
    <section>
      <Banner></Banner>
      <DonationForm />
      <section>
         <h1><a id="Us"></a></h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 justify-content-center">
            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
              <div id="icons" className="container features-icons-icon d-flex justify-content-center">
                <img id ="icon1"  alt="" />
              </div>
              <h3>Quienes Somos!</h3>
              <p className="lead mb-0">
                Donarte es una empresa colombiana, fundadada por estudiantes de
                los Andes!
              </p>
            </div>
          </div>
          <div className="col-lg-4 justify-content-center">
            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
              <div id="icons" className="container features-icons-icon">
                <img id ="icon2"  alt="" />
              </div>
              <h3>Que hacemos!</h3>
              <p className="lead mb-0">
                Ofrecemos un canal efectivo de donaciones a personas y
                fundaciones!
              </p>
            </div>
          </div>
          <div className="col-lg-4 justify-content-center">
            <div className="features-icons-item mx-auto mb-0 mb-lg-3 ">
              <div id="icons" className=" container features-icons-icon justify-content-center">
                <img id ="icon3" alt=""/>
              </div>
              <h3>Como lo hacemos!</h3>
              <p className="lead mb-0">
                Con tu ayuda localizamos a las personas y fundaciones más
                necesitadas!
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr />
    </section>
    <h1><a id="Who"></a></h1>
    <section className="text-center" id="who">
      <h1>A quién ayudamos!</h1>

      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="p-5">
              <img id="usImage1"
                className="img-fluid rounded-circle"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="p-5">
              <h2 className="display-4">Fundaciones</h2>
              <p>
                Con donarte puedes ayudar donando a las fundaciones que se han
                registrado en nuestro sistema. También ayudamos a las
                fundaciones a contactar a las personas más necesitadas a lo
                largo del país. Regístrate ahora y ayúdanos a beneficiar a
                cientos de personas.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 order-lg-2">
            <div className="p-5">
              <img
              id="usImage2"
                className="img-fluid rounded-circle"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 order-lg-1">
            <div className="p-5">
              <h2 className="display-4">Personas</h2>
              <p>
                Con donarte también puedes ayudar a las personas que más lo
                necesitan directamente. No hay necesidad de una organización
                intermediaria. Ayúdanos a encontrar mas personas necesitadas,
                reporta alguna que conozcas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <a id="Testimonies"></a>
    <section className="testimonials text-center bg-light" id="testimonies">
      <div className="container">
        <h2 className="mb-5">Personas que hemos ayudado...</h2>
        <div className="row">
          <div className="col-lg-4">
            <div className="testimonial-item mx-auto mb-5 mb-lg-0">
              <img
                id="personImg1"
                className="img-fluid rounded-circle mb-3"
                alt=""
              />
              <h5>Juan E.</h5>
              <p className="font-weight-light mb-0">
                "¡Gracias Donarte! Me ayudaron cuando nadie mas lo hizo"
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="testimonial-item mx-auto mb-5 mb-lg-0">
              <img
                id = "personImg2"
                className="img-fluid rounded-circle mb-3"
                alt=""
              />
              <h5>Sara R.</h5>
              <p className="font-weight-light mb-0">
                "¡Donarte me contactó y me brindó alimentos y ropa!"
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="testimonial-item mx-auto mb-5 mb-lg-0">
              <img
                id = "personImg3"
                className="img-fluid rounded-circle mb-3"
                alt=""
              />
              <h5>Pedro C.</h5>
              <p className="font-weight-light mb-0">
                "¡Donarte es amor puro! ¡Muchas gracias!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </section>
    
)
    
}

export default Landing;