const User = require('../models/user.model');
const { hash: hashPassword, compare: comparePassword } = require('../utils/password');
const { generate: generateToken } = require('../utils/token');

exports.signup = (req, res) => {
    console.log(req.body)
    const {  email, password, username,  } = req.body;
    const hashedPassword = hashPassword(password.trim());

    const user = new User(  email, hashedPassword, username.trim() );

    User.create(user, (err, data) => {
        if (err) {
            res.status(500).send({
                status: "error",
                message: err.message
            });
        } else {
            const token = generateToken(data.id);
            res.status(200).send({
                status: "success",
                data: {
                    token,
                    data
                }
            });
        }
    });
};

exports.signin = (req, res) => {
    const { email, password } = req.body;
    console.log(req.body)
    User.findByEmail(email.trim(), (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    status: 'error',
                    message: `Usurio con email  ${email} no fue encontrado`
                });
                return;
            }
            res.status(500).send({
                status: 'error',
                message: err.message
            });
            return;
        }
        console.log(data)
        if (data) {
            console.log(data.contrasena)
            if (comparePassword(password.trim(), data.contrasena)) {

                const token = generateToken(data.id);
                res.status(200).send({
                    status: 'success',
                    data: {
                        token,
                        username: data.nombre_usuario,
                        email: data.correo_electronico
                    }
                });
                return;
            }
            res.status(401).send({
                status: 'error',
                message: 'Contraseña es incorrecta'
            });
        }
    });

}