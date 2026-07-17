import { Router } from 'express';
import playerRoutes from './PlayerRoutes';
import gameRoutes from './GameRoutes';
import scoreRoutes from './ScoreRoutes';
import cardRoutes from './CardRoutes';

const router = Router();

router.use('/players', playerRoutes);
router.use('/games', gameRoutes);
router.use('/cards', cardRoutes);
router.use('/scores', scoreRoutes);

export default router;