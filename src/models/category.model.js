const db = require('../config/db.config');
const { createNewCategory: createNewCategoryQuery, findCategoryById: findCategoryByIdQuery, deleteCategory: deleteCategoryQuery, allCategory: allCategoryQuery } = require('../database/queries');
const { logger } = require('../utils/logger');

class Category {
    constructor(descripcion) {
        this.descripcion = descripcion;
    }

    static create(newCategory, cb) {
        db.query(createNewCategoryQuery, 
            [
                newCategory.descripcion
            ], (err, res) => {
                if (err) {
                    logger.error(err.message);
                    cb(err, null);
                    return;
                }
                cb(null, {
                    descripcion: res.descripcion
                });
        });
    }

    static findByCategory(id, cb) {
        db.query(findCategoryByIdQuery, id, (err, res) => {
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
    static allCategory(cb) {
        db.query(allCategoryQuery, (err, res) => {
            if (err) {
                logger.error(err.message);
                cb(err, null);
                return;
            }
            if (res.length) {
                cb(null, res);
                return;
            }
            cb({ kind: "not_found" }, null);
        })
    }
    static deleteCategory(id, cb) {
        db.query(deleteCategoryQuery, id, (err, res) => {
            if (err) {
                logger.error(err.message);
                cb(err, null);
                return;
            }
            if (res.affectedRows == 1) {
                cb(null);
                return;
            }
            cb({ kind: "not_found" }, null);
        })
    }
}

module.exports = Category;