import { Attribute, AttributeValue } from '../database/models';

class AttributeController {
  /**
   * This method get all attributes
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  static async getAllAttributes(req, res, next) {
    // write code to get all attributes from the database here
    return res.status(200).json({ message: 'this works' });
  }

  /**
   * This method gets a single attribute using the attribute id
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  static async getSingleAttribute(req, res, next) {
    const { attribute_id } = req.params;
    // Write code to get a single attribute using the attribute id provided in the request param
    return res.status(200).json({ message: 'this works' });
  }

  /**
   * This method gets a list attribute values in an attribute using the attribute id
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  static async getAttributeValues(req, res, next) {
    const { attribute_id } = req.params;
    // Write code to get all attribute values for an attribute using the attribute id provided in the request param
    // This function takes the param: attribute_id
    return res.status(200).json({ message: 'this works' });
  }

  /**
   * This method gets a list attribute values in a product using the product id
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  static async getProductAttributes(req, res, next) {
    const { product_id } = req.params;
    // Write code to get all attribute values for a product using the product id provided in the request param
    return res.status(200).json({ message: 'this works' });
  }
}

export default AttributeController;
