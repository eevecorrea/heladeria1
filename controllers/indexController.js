
const db = require("../database/models");
const sequelize=db.sequelize;
const {validationResult, body}=require("express-validator")

const indexController = {
    index: function (req, res) {
        res.render('index');
    },
    productList: (req, res) => {
        db.Producto.findAll().then((helados) => {
            res.render('listaHelados.ejs', { helados });
        })
    },
    createForm: (req, res) => {
        console.log('crear')
        res.render('products/createForm');

    },
    createProduct: (req, res) => {
        const errors = validationResult(req);
        console.log(errors)
        if (!errors.isEmpty()) {
          return res.render("products/createForm", {
            errors: errors.errors,
            product:req.body
          });
        }
        /*let helado = db.productos.create({
            nombre: req.body.nombre,
            precio: req.body.precio,
            imagen: req.file.filename,
            categoria_id: req.body.categoria
        })*/

    },
    editForm: (req, res) => {
        db.Producto.findByPk(req.params.id).then((helado) => {
            let id = req.params.id
            db.Categoria.findAll().then((categorias)=>{
                res.render('products/editForm', { helado, categorias, id });
            })
        })
    },
    editProduct: async (req, res) => {
        let idParams = req.params.id
        console.log("editar producto")
        db.Producto.update({
            nombre: req.body.nombre,
            precio: req.body.precio,
            //imagen: req.file.filename,
            //categoria_id: req.body.categoria
            },
            {
               where:{
                id:idParams
               }
            }
        ).catch((e)=>{
            console.log(e);
        });
    },
    deleteProduct: (req, res) => {
        let idParams = req.params.id
        db.Producto.destroy({ 
            where:{ id: idParams }
        });
        res.redirect("/")
    },
    detailForm: (req, res) => {
        db.Producto.findByPk(req.params.id).then((helado) => {
            res.render('details.ejs', { helado })
        })
    },
}

module.exports = indexController
