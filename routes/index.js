const path= require("path");
var express = require('express');
var router = express.Router();
var indexController = require('../controllers/indexController');
const {check, validationResult} = require('express-validator');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req,file,callback) => {
        callback(null, path.join(__dirname,'../public/img/productosImagenes'))
    },
    filename: (req,file,callback) => {
        callback(null,'image-' + Date.now() + path.extname(file.originalname))
    } 
});
const upload = multer({storage});

const createValidator = [
    check("nombre")
        .isLength({min:4}).withMessage("Sabor Invalido"),
    check("precio")
        .notEmpty().isFloat({min:0}).withMessage("Precio Invalido"),
    check("categoria")
        .notEmpty().withMessage("Categoria Invalida")
]

/* GET home page. */
router.get('/', indexController.index );
router.get("/productos", indexController.productList);
router.get("/productos/:id", indexController.detailForm);

router.get("/products/create",createValidator, indexController.createForm);
router.post("/products/create",upload.single('image'),createValidator,indexController.createProduct);
//router.post("/products/create", upload.single("imagen"), productsValidator, indexController.create);


router.get("/products/edit/:id", indexController.editForm);
router.post("/products/edit/:id",upload.single('image') ,indexController.editProduct);
router.post("/products/delete/:id", indexController.deleteProduct);
//router.post("/products/edit/:id", upload.single("imagen"), productsValidator, indexController.processEdit);





module.exports = router;
