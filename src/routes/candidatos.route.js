const router = require('express').Router();
const { asyncHandler } = require('../middlewares/asyncHandler');
const candidatosController = require('../controllers/candidatos.controller');


// router.route('/signup')
    // .post(signupValidator, asyncHandler(checkUsername), asyncHandler(authController.signup));
router.route('/obtenerCandidatos')
    .get(asyncHandler(candidatosController.obtenerCandidatos));

router.route('/votar')
    .post(asyncHandler(candidatosController.votarCandidato));

module.exports = router;