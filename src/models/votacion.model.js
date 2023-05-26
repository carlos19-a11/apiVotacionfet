const db = require('../config/db.config');
const { votarPorCandidato: votarPorCandidatoQuery } = require('../database/queries');
const { logger } = require('../utils/logger');

class Votacion {
    constructor(id_usuario, id_candidatos) {
        this.id_usuario = id_usuario;
        this.id_candidatos = id_candidatos;
    }

    static votarCandidato(newUser, cb) {
        console.log("==", newUser);
        db.query(votarPorCandidatoQuery,
            [
                newUser.id_candidatos,
                newUser.id_usuario,
            ], (err, res) => {
                if (err) {
                    logger.error(err.message);
                    cb(err, null);
                    return;
                }
                cb(null, {
                    // id_usuario: res.insertId,
                    // id_candidatos: newUser.username
                });
            });
    }


}

module.exports = Votacion;