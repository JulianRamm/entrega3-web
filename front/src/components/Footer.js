import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
const Footer = () => {

  return (
    <React.Fragment>
      <footer id="footer" className="footer bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 h-100 text-center text-lg-left my-auto">
              <ul className="list-inline mb-2">
                <li className="list-inline-item">
                  <a href="#">About</a>
                </li>
                <li className="list-inline-item">&sdot;</li>
                <li className="list-inline-item">
                  <a href="#">Contact</a>
                </li>
                <li className="list-inline-item">&sdot;</li>
                <li className="list-inline-item">
                  <a href="#">Terms of Use</a>
                </li>
                <li className="list-inline-item">&sdot;</li>
                <li className="list-inline-item">
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
              <p className="text-muted small mb-4 mb-lg-0">
                &copy; Desarrollado por el equipo 3 del curso programación con
                tecnologías web, sección 1, semestre 2020-20.
            </p>
            </div>
            <div className="col-lg-6 h-100 text-center text-lg-right my-auto">
              <ul className="list-inline mb-0">
                <li className="list-inline-item mr-3">
                  <a
                    href="https://github.com/isis3710-uniandes/202020_S1_E3/tree/master/Entrega2"
                  >
                    <i className="fab fa-github fa-2x fa-fw"></i>
                  </a>
                </li>
                <li className="list-inline-item mr-3">
                  <a
                    href="https://www.youtube.com/watch?v=Mm_94q5AfJg&feature=youtu.be"
                  >
                    <i className="fab fa-youtube fa-2x fa-fw"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  )
}
export default Footer