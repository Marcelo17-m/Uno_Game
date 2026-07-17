import { Router } from 'express';
import playerController from '../Controllers/PlayerController.js';

const router = Router();

router.post('/', playerController.create);
router.get('/', playerController.getAll);
router.get('/:id', playerController.getById);
router.put('/:id', playerController.update);
router.delete('/:id', playerController.delete);
 
export default router;