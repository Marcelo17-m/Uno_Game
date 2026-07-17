import { Router } from 'express';
import playerRoutes from './PlayerRoutes.js';
import gameRoutes from './GameRoutes.js';
import scoreRoutes from './ScoreRoutes.js';
import cardRoutes from './CardRoutes.js';

const router = Router();

router.use('/players', playerRoutes);
router.use('/games', gameRoutes);
router.use('/cards', cardRoutes);
router.use('/scores', scoreRoutes);

export default router;