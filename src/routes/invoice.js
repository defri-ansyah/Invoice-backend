const express = require('express');
const router = express.Router();
const {verifyAccess} = require('../middlewares/auth');
const invoiceController = require('../controllers/invoiceControllers');

router.get('/', verifyAccess, invoiceController.getAllInvoice);
router.get('/report', verifyAccess, invoiceController.getReportInvoice);
router.get('/:id', verifyAccess, invoiceController.getInvoice);
router.post('/', verifyAccess, invoiceController.createInvoice);
router.patch('/edit', verifyAccess, invoiceController.updateInvoice);
router.delete('/:id', verifyAccess, invoiceController.deleteInvoice);

module.exports = router;