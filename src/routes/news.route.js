import { Router } from 'express';
import { check } from 'express-validator';

import { getArchivedNews, deleteNew, getNew, getNews, postNew, putNew } from '../controllers/news.controllers.js';
import { validateFields } from '../middlewares/validate-fields.js';

const router = Router();

router.get('/', getNews);
router.get('/archived', getArchivedNews);
router.get('/:id', [
    check('id', 'Is not a valid mongo id').isMongoId()
], validateFields, getNew);
router.post('/', [
    check('title', 'Title is required').not().isEmpty(),
    check('description', 'Description is required').not().isEmpty(),
    check('date', 'Date must be a valid date').not().isDate(),
    check('content', 'Content is required').not().isEmpty(),
    check('author', 'Author is required').not().isEmpty()
], validateFields, postNew);
router.put('/:id', [
    check('id', 'Is not a valid mongo id').isMongoId()
], validateFields, putNew);
router.delete('/:id', [
    check('id', 'Is not a valid mongo id').isMongoId()
], validateFields, deleteNew);


export default router;