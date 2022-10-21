import {Router} from "express";
import {
    index,
    saveProvider,
    getProvider,
    updateProvider,
    deleteProvider,
    getProductsByProvider
} from "../controllers/provider.controller.js";
const router = Router();

router.get('/providers',index);
router.post('/providers',saveProvider);

router.get('/providers/:id',getProvider);
router.put('/providers/:id',updateProvider);
router.delete('/providers/:id',deleteProvider);

router.get('/providers/:id/products',getProductsByProvider);

export default router;