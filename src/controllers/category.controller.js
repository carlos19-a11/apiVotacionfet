const Category = require('../models/category.model');

exports.createCategory = (req, res) => {
    const { descripcion } = req.body;
    const categoria = new Category(descripcion);

    Category.create(categoria, (err, data) => {
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

exports.allCategory = (req, res) => {
    
    Category.allCategory((err, data) => {
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
exports.findByCategory = (req, res) => {
    const { id } = req.params;

    Category.findByCategory(id, (err, data) => {
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
exports.deleteCategory = (req, res) => {
    const { id } = req.params;

    Category.deleteCategory(id, (err, data) => {
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

