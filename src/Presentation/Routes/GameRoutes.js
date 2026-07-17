import { Router } from 'express';
import gameController from '../Controllers/GameController.js';

const router = Router();

router.post('/', gameController.create);
router.get('/', gameController.getAll);
router.get('/:id', gameController.getById);
router.put('/:id', gameController.update);
router.delete('/:id', gameController.delete);
 
export default router;