const router = require('express').Router();
const { asyncHandler } = require('../middlewares/asyncHandler');
const categoryController = require('../controllers/category.controller');


router.route('/createCategory').post(  asyncHandler(categoryController.createCategory))
router.route('/allCategory').get(asyncHandler(categoryController.allCategory))
router.route('/findCategory/:id').get(asyncHandler(categoryController.findByCategory))
router.route('/deleteCategory/:id').post(asyncHandler(categoryController.deleteCategory))


module.exports = router;