const Candidatos = require('../models/candidatos.model');
const Votacion = require('../models/votacion.model');



exports.obtenerCandidatos = (req, res) => {
    
    Candidatos.getCandidatos((err, data) => {
        if (err) {
            res.status(500).send({
                status: "error",
                message: err.message
            });
        } else {
            res.status(200).send({
                status: "success",
                data: data
            });
        }
    });

    
};
exports.votarCandidato = (req, res) => {
    // console.log(req.body)
    const {  id_usuario, id_candidatos  } = req.body;
    

    const candidatos = new Votacion(  id_usuario, id_candidatos );
    console.log(candidatos);
    
    Votacion.votarCandidato(candidatos, (err, data) => {
        if (err) {
            res.status(500).send({
                status: "error",
                message: err.message
            });
        } else {
            res.status(200).send({
                status: "success",
                data: {
                    data
                }
            });
        }
    });

    
};




