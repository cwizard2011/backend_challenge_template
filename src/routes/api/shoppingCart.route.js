import { Router } from 'express';
import ShoppingCartController from '../../controllers/shoppingCart.controller';
import Authenticator from '../../middlewares/authenticator';

const router = Router();
router.get('/cart/generateUniqueId', ShoppingCartController.generateUniqueCart);
router.post('/shoppingcart/add', ShoppingCartController.addItemToCart);
router.get('/shoppingcart', ShoppingCartController.getCart);
router.get('/shoppingcart/:cartId', ShoppingCartController.getCart);
router.delete('/shoppingcart/empty/:cartId', ShoppingCartController.emptyCart);
router.delete('/shoppingcart/removeProduct/:itemId', ShoppingCartController.removeItemFromCart);
router.post('/orders', Authenticator.authenticateUser, ShoppingCartController.createOrder);
router.get('/orders/inCustomer', Authenticator.authenticateUser, ShoppingCartController.getCustomerOrders);
router.get(
  '/orders/:orderId',
  Authenticator.authenticateUser,
  ShoppingCartController.getOrderSummary
);
router.post('/stripe/charge', Authenticator.authenticateUser, ShoppingCartController.processStripePayment);

export default router;
