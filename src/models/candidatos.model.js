const db = require('../config/db.config');
const { getCandidatos: getCandidatosQuery, votarPorCandidato: votarPorCandidatoQuery} = require('../database/queries');
const { logger } = require('../utils/logger');

class Candidatos {
    constructor(descripcion) {
        this.descripcion = descripcion;
    }



    static getCandidatos(id, cb) {
        db.query(getCandidatosQuery, id, (err, res) => {
            if (err) {
                logger.error(err.message);
                cb(err, null);
                return;
            }
            if (res.length) {
                cb(null, res[0]);
                return;
            }
            cb({ kind: "not_found" }, null);
        })
    }

    
}

module.exports = Candidatos;