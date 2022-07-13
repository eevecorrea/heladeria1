const db = require('../database/models');

const indexController = {
    index:function(req, res) {
        res.render('index');
    },

    productList: (req, res) => {
        db.Producto.findAll().then((helados)=>{
            res.render('listaHelados.ejs',{helados});  
        })
    },

    createForm: (req, res) => {
        res.render('createForm');
    },

    editForm: (req, res) => {
        res.render('editForm');
    },

    detailForm: (req, res) => {
        console.log('asd');
        db.Producto.findByPk(req.params.id).then((helado)=>{
            res.render('details.ejs',{helado})    
        })
    },
}

module.exports=indexController
