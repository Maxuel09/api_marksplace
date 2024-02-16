import { Router } from 'express';
import { UserController } from '../controllers/User.controller.js';
export const router = Router();

router.get('/', UserController.getallUsers);
router.get('/:id_user', UserController.getUser);
router.post('/', UserController.createUser);
router.put('/:id_user', UserController.updateUser);
router.delete('/:id_user', UserController.deleteUser);

