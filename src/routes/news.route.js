import { Router } from 'express';

const router = Router();

router.get('/', ( req, res ) => {
    console.log(res.send('hola'));
});


export default router;