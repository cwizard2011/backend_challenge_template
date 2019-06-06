import { Router } from 'express';
import ProductController from '../../controllers/product.controller';
import redisCache from '../../middlewares/redisCache';

const router = Router();
router.get('/products', redisCache, ProductController.getAllProducts);
router.get('/products/:productId', redisCache, ProductController.getProduct);
router.get(
  '/products/inCategory/:categoryId',
  redisCache,
  ProductController.getProductsByCategory
);
router.get(
  '/products/inDepartment/:departmentId',
  redisCache,
  ProductController.getProductsByDepartment
);
router.get('/departments', redisCache, ProductController.getAllDepartments);
router.get('/departments/:departmentId', redisCache, ProductController.getDepartment);
router.get('/featured', ProductController.getFeaturedProducts);

export default router;
