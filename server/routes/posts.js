import express from 'express';

import {getPosts, createPosts, getPost, deletePost} from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/post', createPosts);
router.get('/:id', getPost);
router.delete('/:id', deletePost);

export default router;