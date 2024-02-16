
import { Router } from 'express';
import { RolController } from '../controllers/Rol.controller.js';

export const router = Router();

router.get('/', RolController.getallRol);
router.get('/:id_rol', RolController.getRol);
router.post('/', RolController.createRol);
// router.put('/:id_rol', RolController.updateRol);
// router.delete('/:id_rol', RolController.deleteRol);

