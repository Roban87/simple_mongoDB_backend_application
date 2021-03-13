import express from 'express';
import { recordsController } from '../controllers';

const cors = require('cors');

const router = express.Router();

router.use(cors());
router.use(express.json());

router.get('/records', recordsController.getAllBooks);
router.get('/records/:id', recordsController.getBookById);
router.post('/records', recordsController.postBook);
router.delete('/records/:id', recordsController.deleteBookById);

export default router;
