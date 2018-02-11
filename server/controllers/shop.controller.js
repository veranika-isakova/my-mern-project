import Shop from '../models/shop';

export function getProducts(req, res) {
  Shop.find().sort('-dateAdded').exec((err, products) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ products });
  });
}
