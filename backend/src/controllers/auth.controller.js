import { generateToken } from '../lib/utils.js';
import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import cloudinary from '../lib/cloudinary.js';

export const signup = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        if (!name || !email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        if (password.length < 6) {
            return res.status(400).json({ message: 'Password must be at least 6 characters long' });
        }

        const isExictingUser = await User.findOne({
            email
        });
        if (isExictingUser) {
            return res.status(400).json({ message: 'User with this email already exists' });
        }

        const salt = await bcrypt.genSalt(10);   ///////  <---  Generate salt for password hashing 
        const hashedPassword = await bcrypt.hash(password, salt);   ///////  <---  Hash password with salt 
        const newUser = new User({
            name,
            email,
            password: hashedPassword
        });

        if (newUser) {
            generateToken(newUser._id, res);

            await newUser.save();
            res.status(201).json({ 
                _id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                profilePic: newUser.profilePic,
            });
        } else {
            res.status(400).json({
                error: 'User not created'
            });
        }


    } catch (error) {
        console.log('Error on signup: ', error.message);
        
        res.status(500).json({ error: 'Something went wrong' });
    }
}
export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        const isMatch = await bcrypt.compare(password, user.password);  /////// compare password
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        generateToken(user._id, res); 
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            profilePic: user.profilePic,
        });

    } catch (error) {
        console.log('Error on login: ', error.message);
        
        res.status(500).json({ message: 'Something went wrong' });
        
    }
}
export const logout = async (req, res) => {
    try {
        res.cookie('jwt', '', { maxAge: 1 }); // clear the cookie 
        res.status(200).json({ message: 'Logged out' });
    } catch (error) {
        console.log('Error on logout: ', error.message);
        
        res.status(500).json({ message: 'Something went wrong' });
        
    }
}

export const updateProfile = async (req, res) => {
    try {
        const { profilePic } = req.body;
        const userId = req.user._id;
        
        if (!profilePic) {
            return res.status(400).json({ message: 'Profile picture is required' });
        }

        const uploadResponse = await cloudinary.uploader.upload(profilePic);
        const updatedUser = await User.findByIdAndUpdate(userId, { profilePic: uploadResponse.secure_url }, { new: true });
        res.status(200).json(updatedUser);
    }
    catch (error) {
        console.log('Error on updateProfile: ', error.message);
        
        res.status(500).json({ message: 'Something went wrong' });
        
    }
}

// Check if the user is authenticated and return the user object 
export const checkAuth = async (req, res) => {
    try {
        res.status(200).json(req.user);
    } catch (error) {
        console.log('Error on checkAuth: ', error.message);       
        res.status(500).json({ message: 'Something went wrong' });
        
    }
}