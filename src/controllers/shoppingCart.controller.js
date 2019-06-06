/** 
 * Check each method in the shopping cart controller and add code to implement
 * the functionality or fix any bug.
*/

import uniqid from 'uniqid';
import stripe from 'stripe';
import { ShoppingCart, Product, Shipping, Order, OrderDetail } from '../database/models';
import MailingController from './mailing.controller';
/**
 *
 *
 * @class shoppingCartController
 */
class ShoppingCartController {
  /**
   * generate random unique id for cart identifier
   *
   * @static
   * @param {obj} req express request object
   * @param {obj} res express response object
   * @returns {json} returns json response with cart_id
   * @memberof shoppingCartController
   */
  static generateUniqueCart(req, res) {
    // implement method to generate unique cart Id
  }

  /**
   * adds item to a cart with cart_id
   *
   * @static
   * @param {obj} req express request object
   * @param {obj} res express response object
   * @returns {json} returns json response with cart
   * @memberof ShoppingCartController
   */
  static async addItemToCart(req, res, next) {
    const { productId, attributes, quantity } = req.body;
    const { cartId } = req.session;
    
    // implement function to add item to cart
  }

  /**
   * gets items in a cart, if cartId is supplied in req params it uses that to query
   * otherwise, it uses the cartId stored in the session
   * if neither exists it creates a new id and stores it in session
   *
   * @static
   * @param {obj} req express request object
   * @param {obj} res express response object
   * @returns {json} returns json response with cart
   * @memberof ShoppingCartController
   */
  static async getCart(req, res, next) {
    
    // implement method to get cart items
  }

  /**
   * removes all items in a cart
   *
   * @static
   * @param {obj} req express request object
   * @param {obj} res express response object
   * @returns {json} returns json response with cart
   * @memberof ShoppingCartController
   */
  static async emptyCart(req, res, next) {
    const { cartId } = req.session;
   // implement method to empty cart
  }

  /**
   * remove single item from cart
   * cart id is obtained from current session
   *
   * @static
   * @param {obj} req express request object
   * @param {obj} res express response object
   * @returns {json} returns json response with message
   * @memberof ShoppingCartController
   */
  static async removeItemFromCart(req, res, next) {
    const { cartId } = req.session;
    const { itemId } = req.params;

    try {
      // implement code to remove item from cart here
    } catch (error) {
      return next(error);
    }
  }

  /**
   * create an order from a cart
   *
   * @static
   * @param {obj} req express request object
   * @param {obj} res express response object
   * @returns {json} returns json response with created order
   * @memberof ShoppingCartController
   */
  static async createOrder(req, res, next) {
    const { shippingId } = req.body;
    const { cartId } = req.session;
    try {
      
      // implement code for creating order here
    } catch (error) {
      return next(error);
    }
  }

  /**
   *
   *
   * @static
   * @param {obj} req express request object
   * @param {obj} res express response object
   * @returns {json} returns json response with customer's orders
   * @memberof ShoppingCartController
   */
  static async getCustomerOrders(req, res, next) {
    const { customerId } = req;
    try {
      // implement code to get customer order
    } catch (error) {
      return next(error);
    }
  }

  /**
   * @static
   * @param {*} req 
   * @param {*} res 
   * @param {*} next 
   */
  static async processStripePayment(req, res, next) {
    const { email, stripeToken, orderId } = req.body;
    const { customerId } = req;
    try {
      // implement code to process payment and send order confirmation email here
    } catch (error) {
      return next(error);
    }
  }
}

export default ShoppingCartController;
