var Product = require('../models/product');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
  res.send('Greetings from the Test controller!');
};

exports.product_create = function (req, res) {
  var product = new Product(
    {
      name: req.body.name,
      text: req.body.text,
      checked: req.body.checked
    }
  );

  product.save(function (err) {
    if (err) {
      return next(err);
    }
    console.log('Product', product)
    res.send(product)
  })
};

exports.product_details_all = function (req, res) {
  Product.find().then((err, product) => {
    if (err) {
      return res.send(err);
    }
    //res.send(product);
    res.json(product);
  });
};


exports.product_details = function (req, res) {
  Product.findById(req.params.id, function (err, product) {
    if (err) return next(err);
    res.send(product);
  })
};

exports.product_update = function (req, res) {
  Product.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, product) {
    if (err) return next(err);
    res.send(product);
  });
};

exports.product_delete = function (req, res) {
  Product.findByIdAndRemove(req.params.id, function (err) {
    if (err) return next(err);
    res.send('Deleted successfully!');
  })
};