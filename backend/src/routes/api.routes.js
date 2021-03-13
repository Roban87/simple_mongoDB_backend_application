import express from 'express';

const cors = require('cors');

const router = express.Router();

router.use(cors());
router.use(express.json());

export default router;
