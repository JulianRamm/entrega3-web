var express=require("express");
var router= express.Router();

const donation=require("../controller/donation");

//GET 
router.get("/",(req,res)=>{
    donation.getDonations((data)=>{
        res.send(data);
    });
});

//GET donation by id 
router.get("/:id", (req,res)=>{
    console.log(req.params.id);
    donation.getDonation(req.params.id,(donat)=>{
        if(!donat)
            return res.status(404).send("No existe una donacion con el id dado");
        console.log(donat);
        res.send(donat);
        
    });
});

//POST
router.post("/",(req,res)=>{
    console.log(req.body)
    const t=req.body.tipo
    let donacion={}
    // Dependiendo del tipo de donacion se llenan los campos correspondientes 
    console.log(t)
    if(t==="ropa"){
        console.log("Entre a ropa")
         donacion ={
             tipo:t,
            //Estado de la ropa (nueva o usada)
            estado:req.body.estado,
            //La ropa es para hombre o para mujer 
            genero:req.body.genero,
            //La ropa es para niño adulo o cualquiera
            edad:req.body.edad,
            //Usa o no una fundacion como intermediario
            fundacion:req.body.fundacion,
        };
    }
    else if (t==="comida"){
        donacion={
            tipo:t,
            //Si la comida es para niños o para adultos 
            edad:req.body.edad,
            //El tipo de comida (lista par consumir, necesita preparación)
            estado:req.body.estado,
            //Usa o no una fundacion como intermediario
            fundacion:req.body.fundacion,
        };
    }
    else if (t==="dinero"){
        donacion={
            tipo:t,
            //Cantidad de dinero que se dono 
            cant:req.body.cant,
            //Modalidad en la que se dono el dinero
            mod:req.body.mod,
            //Usa o no una fundacion como intermediario
            fundacion:req.body.fundacion,
        };
    }
    else if(t=="otro"){
        donacion={
            tipo:t,
            descripcion:req.body.descripcion,
            //Usa o no una fundacion como intermediario
            fundacion:req.body.fundacion,

        }
    }
    donation.addDonation(donacion,(response)=>{
        res.send(donacion);
        console.log(donacion);
    })
});

router.delete("/:id",(req,res)=>{
    donation.deleteDonation(req.params.id,(donacion)=>{
        res.send("Eliminado!")
    });
});

module.exports=router;