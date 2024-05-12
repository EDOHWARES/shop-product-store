const Product = require('../models/product');

exports.getAddProducts = (req, res, next) => {
    res.render('admin/add-product.pug', {
        docTitle: 'add-product',
        path: '/add-product'});
};

exports.postAddProducts = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;

    const product = new Product(title, imageUrl, price, description);
    product.save();
    res.redirect('/');
};

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('admin/product-list', {
            prods: products,
            path:'/admin/products',
            docTitle: "Admin Products"
        })
    })
}