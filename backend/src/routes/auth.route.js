import express from 'express';
import { signup, login, logout, updateProfile, checkAuth } from '../controllers/auth.controller.js';
import { protectRoute } from '../middlewares/auth.middleware.js';

const router = express.Router(); // create a router object 

router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);

// protect the route with the middleware protectRoute to allow only authenticated users to update their profile
router.put('/update-profile', protectRoute, updateProfile); 

router.get('/check', protectRoute, checkAuth);


export default router;