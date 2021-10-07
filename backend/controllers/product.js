const Product = require('../models/product');

exports.getAllProducts = async (req, res, next) => {
  try {
    const [allProducts] = await Product.fetchAll();
    res.status(200).json(allProducts);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.postProduct = async (req, res, next) => {
  try {
    const postResponse = await Product.post(req.body.name, req.body.extra, req.body.price, req.body.quantity);
    res.status(201).json(postResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.putProduct = async (req, res, next) => {
  try {
    const putResponse = await Product.update(req.body.id, req.body.name, req.body.extra, req.body.price, req.body.quantity);
    res.status(200).json(putResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.deleteProduct = async (req, res, next) => {
  try {
    const deleteResponse = await Product.delete(req.params.id);
    res.status(200).json(deleteResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
