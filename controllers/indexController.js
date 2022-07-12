const indexController = {
    index:function(req, res, next) {
        res.render('index');
      },
      
      productList: (req, res) => {
        res.render('productList');

        },
        createForm: (req, res) => {
         res.render('createForm');
        },

         editForm: (req, res) => {
            res.render('editForm');
         },
        
        detailForm: (req, res) => {
            res.render('detailForm')
        },
        
        delete: (req, res) => {
            res.render('delete')
        },

}

module.exports=indexController
