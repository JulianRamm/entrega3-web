var express = require("express");
var router = express.Router();

const user = require("../controller/user");

/* GET users listing. */
router.get("/", function (req, res, next) {
  user.getUsers((data) => {
    res.send(data);
  });
});

/* GET user by email. */
router.get("/:email", function (req, res, next) {
  console.log(req.params.email);
  user.getUser(req.params.email, (usuario) => {
    if (!usuario)
      return res.status(404).send("El usuario con el email dado no existe");
    res.send(usuario);
  });
});

/* POST user*/
router.post("/", function (req, res, next) {
  user.getUser(req.body.email, (usuario) => {
    if (usuario) {
      return res.status(409).send("Un usuario con el email dado ya existe");
    } else {
      const usuario = {
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        email: req.body.email,
        telefono: req.body.telefono,
        fundacion: req.body.fundacion,
        clave: req.body.clave,
      };

      user.addUser(usuario, (response) => {
        res.send(usuario);
        console.log(usuario);
      });
    }
  });
});

module.exports = router;
