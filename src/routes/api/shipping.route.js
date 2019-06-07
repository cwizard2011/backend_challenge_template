import { Router } from 'express';
import ShippingController from '../../controllers/shipping.controller';
import redisCache from '../../middlewares/redisCache';

const router = Router();

router.get('/shipping/regions', redisCache, ShippingController.getShippingRegions);
router.get('/shipping/regions/:shipping_region_id', redisCache, ShippingController.getShippingType);

export default router;
