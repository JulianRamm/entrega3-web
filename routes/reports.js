var express = require("express");
var router = express.Router();

const report = require("../controller/report");

/* GET reports listing. */
router.get("/", function (req, res, next) {
  report.getReports((data) => {
    res.send(data);
  });
});

/* GET report by id */
router.get("/:id", function (req, res, next) {
  console.log(req.params.id);
  report.getReport(req.params.id, (loc) => {
    if (!loc)
      return res.status(404).send("El reporte con el id dado no existe");
    console.log(loc);
    res.send(loc);
  });
});

/* POST report*/
router.post("/", function (req, res, next) {
  const reporte = {
    cantidadAdultos: req.body.cantidadAdultos,
    cantidadNinos: req.body.cantidadNinos,
    comida: req.body.comida,
    ropa: req.body.ropa,
    otros: req.body.otros,
    otrosDescripcion: req.body.otrosDescripcion,
    comentario: req.body.comentario,
  };

  report.addReport(reporte, (response) => {
    res.send(reporte);
  });
});

module.exports = router;
