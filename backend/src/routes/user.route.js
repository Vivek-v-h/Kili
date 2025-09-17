import express from 'express';
const router = express.Router();
import { getUserProfile } from '../controllers/user.controller.js';
import { protectRoute } from '../middleware/auth.middleware.js';
import { updateProfile } from '../controllers/user.controller.js';
import { syncUser } from '../controllers/user.controller.js';
import { getCurrentUser } from '../controllers/user.controller.js';
import { followUser } from '../controllers/user.controller.js';

router.get("/profile/:username",getUserProfile);

router.post("/sync",protectRoute,syncUser);

router.post("/me",protectRoute,getCurrentUser);

router.put("/profile",protectRoute,updateProfile);

router.post("/follow/:targetUserId",followUser);

export default router;