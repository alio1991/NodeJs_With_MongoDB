const Person = require("../models/person-model");



//GET
exports.get = (req, res) => {
  console.log('GET All');
  Person.find((err, product) => {
    if (err) return err;
    res.send(product);
  })
};

exports.getOne = (req, res) => {
  console.log('GET ' + req.params.id);
  Person.findById(req.params.id, function (err, product) {
    if (err) return err;
    res.send(product);
  })
};

//POST
exports.post = (req, res) => {
  console.log('POST');
  const post = new Person(req.body);
  post.save((err, result) => {
    if (err) {
      return res.status(400).json({
        error: err
      });
    } else {
      res.send('Person was created');
    }
    res.status(200).json({
      post: result
    });
  });
};

//UPDATE
exports.put = (req, res) => {
  console.log('PUT ' + req.params.id);
  Person.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, product) {
    if (err) return err;
    res.send(product);
    return
  })
};

//DELETE
exports.delete = (req, res) => {
  console.log('DELETE ' + req.params.id);
  Person.findByIdAndRemove(req.params.id, function (err, res) {
    if (err) return err;
    res.send('Deleted successfully!' + res);
    return
  })
};