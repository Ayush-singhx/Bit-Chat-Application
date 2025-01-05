import { v2 as cloudinary } from 'cloudinary'; 

import { config } from 'dotenv'; // Import the config function from the dotenv module 
config(); // Execute the config function to load the environment variables from the .env file

// Configure cloudinary with your cloudinary credentials 
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudinary;