import React from "react";
class Report extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cantidadAdultos: 0,
      cantidadNinos: 0,
      comida: false,
      ropa: false,
      otros: false,
      otrosDescripcion: "",
      comentario: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }
  async componentDidMount() {
    // POST request using fetch with async/await
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "React POST Request Example" }),
    };
    const response = await fetch("/api/reports", requestOptions);
    const data = await response.json();
    this.setState(this.report);
  }
  handleInputChange(event) {
    const target = event.target;

    const name = target.name;
    this.setState({
      [name]: name,
      comida:
        event.target.id === "checkComida"
          ? target.checked
          : this.state.comida,
      otros:
        event.target.id === "checkOtros"
          ? target.checked
          : this.state.otros,
      cantidadAdultos:
        event.target.id === "cantAd"
          ? target.value
          : this.state.cantidadAdultos,
      cantidadNinos:
          event.target.id === "cantNin"
            ? target.value
            : this.state.cantidadNinos,
      ropa:
        event.target.id === "checkRopa"
          ? target.checked
          : this.state.ropa,
      otrosDescripcion:
          event.target.id === "descripcion"
            ? target.value
            : this.state.otrosDescripcion,
      comentario:
          event.target.id === "comentario"
            ? target.value
            : this.state.comentario,
    });
  }
  render() {
    return (
      <section id="report">
        <div className="card bg-light">
          <article className="card-body mx-auto">
            <h1 className="card-title mb-4 text-center">
              Reporta personas que necesiten ayuda
            </h1>
            <form id="reporte">
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-user"></i>
                  </span>
                </div>
                <input
                  name=""
                  id = "cantAd"
                  className="form-control"
                  placeholder="¿Cuantos adultos hay?"
                  type="number"
                  value={this.state.cantidadAdultos}
                  min="0"
                  onChange={this.handleInputChange}
                />
              </div>

              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-user"></i>
                  </span>
                </div>
                <input
                  name=""
                  id="cantNin"
                  className="form-control"
                  placeholder="¿Cuantos niños hay?"
                  type="number"
                  value={this.state.cantidadNinos}
                  onChange={this.handleInputChange}
                  min="0"
                />
              </div>
              <div className="form-group input-group justify-content-center">
                <h2>¿Qué necesitan?</h2>
              </div>
              <div className="form-group input-group justify-content-center">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input pr-3"
                    id="checkRopa"
                    checked={this.state.ropa}
                    onChange={this.handleInputChange}
                  ></input>
                  <label
                    className="custom-control-label pr-2"
                    htmlFor="checkRopa"
                  >
                    Ropa
                  </label>
                </div>
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input pr-3"
                    id="checkComida"
                    checked={this.state.comida}
                    onChange={this.handleInputChange}
                  ></input>
                  <label
                    className="custom-control-label pr-2"
                    htmlFor="checkComida"
                  >
                    Comida
                  </label>
                </div>
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input pr-3"
                    id="checkOtros"
                    checked={this.state.otros}
                    onChange={this.handleInputChange}
                  ></input>
                  <label
                    className="custom-control-label pr-2"
                    htmlFor="checkOtros"
                  >
                    Otros
                  </label>
                </div>
              </div>

              <div
                className="custom-control mt-3"
                id="divReportComida"
                style={{ display: this.state.comida ? "block" : "none" }}
              >
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-utensils"></i>
                  </span>
                  <select className="form-control" id="tipo-comida" required>
                    <option defaultValue="">¿Qué tipo de comida es?</option>
                    <option>Lista para consumir</option>
                    <option>Requiere preparación</option>
                    <option>Cualquiera</option>
                  </select>
                </div>
              </div>
              <div
                className="custom-control mt-3 text-center"
                id="divOtros"
                style={{
                  display: this.state.otros ? "block" : "none",
                  width: "100%",
                }}
              >
                <textarea
                  rows="10"
                  id="descripcion"
                  placeholder="¿Que necesitan?"
                  value={this.state.otrosDescripcion}
                  onChange={this.handleInputChange}
                ></textarea>
              </div>
              <div className="custom-control m-3 text" id="divOtros">
                <textarea
                  rows="10"
                  id="comentario"
                  placeholder="Describe el problema de manera detallada..."
                  style={{ width: "100%" }}
                  value={this.state.comentario}
                  onChange={this.handleInputChange}
                ></textarea>
              </div>
              <div className="form-group">
                <div id="map"></div>
                <button className="btn btn-primary btn-block">Reportar!</button>
              </div>
            </form>
          </article>
        </div>
      </section>
    );
  }
}
export default Report;
