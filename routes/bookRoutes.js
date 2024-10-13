// routes/bookRoutes.js
import express from 'express';
import { addBook } from '../controllers/bookController.js';
import { authenticateToken } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/add', authenticateToken, addBook);  

export default router;
