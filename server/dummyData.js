import Product from './models/shop';

export default function () {
 Product.count().exec((err, count) => {
   if (count > 0) {
     return;
   }

   Product.create([
     new Product({
       name: "Tennis ball",
     }),
     new Product({
       name: "Skateboard",
     }),
   ], (error) => {
     if (!error) {
       // console.log('ready to go....');
     }
   });
 });
}
