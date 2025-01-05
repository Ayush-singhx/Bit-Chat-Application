import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

// Middleware to protect routes from unauthorized access 
export const protectRoute = async (req, res, next) => {
    try { 
        const token = req.cookies.jwt;  // get the token from the cookie 

        if (!token) {
            return res.status(401).json({ error: 'Unauthorized' });
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY);   // decode the token to get the user id 

        if (!decoded) {
            return res.status(401).json({ error: 'Unauthorized' });
        }

        const user = await User.findById(decoded.userId).select('-password');  // get the user from the database 

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        req.user = user;  // set the user in the request object 
        next();
    }
    catch (error) {
        console.log('Error on protectRoute: ', error.message);
        res.status(500).json({ error: 'Something went wrong' });
    }
}