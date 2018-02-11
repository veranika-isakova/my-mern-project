import { Router } from 'express';
import * as ShopController from '../controllers/shop.controller';

const router = new Router();

router.route('/products').get(ShopController.getProducts);

export default router;
