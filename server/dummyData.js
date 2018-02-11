import Product from './models/shop';

export default function () {
  Product.count().exec((err, count) => {
    if (count > 0) {
      return;
    }

     Product.create([
       new Product({
         name: {
           defaultMessage: "Tennis ball",
           translations: [
             { language: "fr", message: "Balle de tennis" },
           ]
         },
       }),
       new Product({
         name: {
           defaultMessage: "Skateboard",
           translations: [
             { language: 'fr', message: 'Planche à roulette' },
           ],
         },
       }),
     ], (error) => {
       if (!error) {
         // console.log('ready to go....');
       }
     });
  });
}
