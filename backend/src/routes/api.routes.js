import express from 'express';
import { recordsController } from '../controllers';

const cors = require('cors');

const router = express.Router();

router.use(cors());
router.use(express.json());

router.get('/records', recordsController.getAllRecords);
router.get('/records/:id', recordsController.getRecordById);
router.post('/records', recordsController.postRecord);
router.delete('/records/:id', recordsController.deleteRecordById);

export default router;
