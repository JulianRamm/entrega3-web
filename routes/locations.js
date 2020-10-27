var express = require("express");
var router = express.Router();

const location = require("../controller/location");

/* GET locations listing. */
router.get("/", function (req, res, next) {
  location.getLocations((data) => {
    console.log(data);
    res.send(data);
  });
  //res.send("respond with a resource");
});

/* GET location by id */
router.get("/:id", function (req, res, next) {
  console.log(req.params.id);
  location.getLocation(req.params.id, (loc) => {
    if (!loc)
      return res.status(404).send("La ubicación con el id dado no existe");
    console.log(loc);
    res.send(loc);
  });
});

/* POST location*/
router.post("/", function (req, res, next) {
  const ubicacion = {
    nombre: req.body.nombre,
    latitud: req.body.latitud,
    longitud: req.body.longitud,
  };

  location.addLocation(ubicacion, (response) => {
    res.send(ubicacion);
    console.log(ubicacion);
  });
});


//DELETE location 
router.delete("/:id", (req,res)=>{
  location.deleteLocation(req.params.id,(ubicacion)=>{
    res.send("Eliminado!");
  });
});

module.exports = router;
