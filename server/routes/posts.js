import express from 'express';

import {getPosts, createPosts, getPost} from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/post', createPosts);
router.get('/:id', getPost);

export default router;