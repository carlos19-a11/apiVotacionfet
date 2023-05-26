const db = require('../config/db.config');
const { allProducts: allProductsQuery, findByProducts: findByProductsQuery} = require('../database/queries');
const { logger } = require('../utils/logger');

class Products {
    constructor(categoria_id, nombre, descripcion, stock, precio, img) {
        this.categoria_id = categoria_id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.stock = stock;
        this.precio = precio;
        this.img = img;
    }

    static allProducts(product, cb) {
        db.query(allProductsQuery, product, (err, res) => {
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
    static findByProducts(id, cb) {
        db.query(findByProductsQuery, id, (err, res) => {
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

module.exports = Products;