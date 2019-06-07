import { Router } from 'express';
import TaxController from '../../controllers/tax.controller';

const router = Router();

// debug these routes

router.get('/tax', TaxController.getAllTax);
router.get('/tax/:taxId', TaxController.call);

export default router;
