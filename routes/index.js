var express = require('express');
var router = express.Router();
var indexController = require('../controllers/indexController')

/* GET home page. */
router.get('/', indexController.index );
router.get("/products", indexController.productList);

router.get("/products/create", indexController.createForm);
router.post("/products/create", upload.single("imagen"), productsValidator, indexController.create);

router.get("/products/edit/:id", indexController.editForm);
router.post("/products/edit/:id", upload.single("imagen"), productsValidator, indexController.processEdit);

router.get("/products/detail/:id", indexController.detailForm);

router.post("/products/delete/:id", indexController.delete);


module.exports = router;
