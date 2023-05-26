const Products = require('../models/products.model');
// const uploadFile = require('../middlewares/upload')
const fs = require('fs')

// exports.createProducts = (req, res) => {
//     const { descripcion } = req.params;
//     console.log(req);
//     // const categoria = new Products(descripcion);

//     // Products.create(categoria, (err, data) => {
//     //     if (err) {
//     //         res.status(500).send({
//     //             status: "error",
//     //             message: err.message
//     //         });
//     //     } else {
//     //         res.status(200).send({
//     //             status: "success",
//     //             data: {
//     //                 data
//     //             }
//     //         });
//     //     }
//     // });
// };

exports.allProducts = (req, res) => {
    
    Products.allProducts((err, data) => {
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
exports.findByProducts = (req, res) => {
    const { id } = req.params;
    console.log(id)

    Products.findByProducts(id, (err, data) => {
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
// exports.deleteProducts = (req, res) => {
//     const { id } = req.params;

//     Products.deleteProducts(id, (err, data) => {
//         if (err) {
//             res.status(500).send({
//                 status: "error",
//                 message: err.message
//             });
//         } else {
//             res.status(200).send({
//                 status: "success",
//                 data: data
//             });
//         }
//     });
// };
