import { Tax } from '../database/models';

class TaxController {
  /**
   * This method get all taxes
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  static async getAllTax(req, res, next) {
    // write code to get all tax from the database here
    return res.status(200).json({ message: 'this works' });
  }

  /**
   * This method gets a single tax using the tax id
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  static async getSingleTax(req, res, next) {
    const { tax_id } = req.params;  // eslint-disable-line
    // Write code to get a single tax using the tax Id provided in the request param
    return res.status(200).json({ message: 'this works' });
  }
}

export default TaxController;
