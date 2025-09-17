import express from 'express';
const router = express.Router();
import { createPost,getUserPosts,getPost, getPosts } from '../controllers/post.controller.js';
import { protectRoute } from '../middleware/auth.middleware.js';
import upload from '../middleware/upload.middleware.js';
import { likePost } from '../controllers/post.controller.js';
import { deletePost } from '../controllers/post.controller.js';

router.get("/",getPosts)
router.get("/:postId",getPost)
router.get("/user/:username",getUserPosts)

router.post("/",protectRoute,upload.single("image"),createPost)
router.post("/:postId/like", protectRoute, likePost);
router.delete("/:postId", protectRoute, deletePost);

export default router;