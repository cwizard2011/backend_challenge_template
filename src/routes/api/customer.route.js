import { Router } from 'express';
import CustomerController from '../../controllers/customer.controller';
import CustomerValidator from '../../middlewares/customerValidator';
import Authenticator from '../../middlewares/authenticator';

// These are valid routes but they may contain a bug, please try to define and fix them

const router = Router();
router.post(
  '/customers',
  CustomerValidator.validateSignUp,
  CustomerValidator.validateUpdateBillingInfo
);
router.post('/customers/login', CustomerValidator.validateLogin, CustomerController.login);
router.get('/customer', Authenticator.authenticateUser, CustomerController.getCustomerProfile);
router.put(
  '/customer',
  CustomerValidator.validateUpdateProfile,
  Authenticator.authenticateUser,
  CustomerController.apply
);
router.put(
  '/customer/address',
  Authenticator.authenticateUser,
  CustomerController.updateCustomerAddress
);
router.put(
  '/customer/creditCard',
  Authenticator.authenticateUser,
  CustomerController.updateCreditCard
);

export default router;
