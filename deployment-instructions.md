# Deployment Instructions for MERN Chat App

## Backend Deployment on Render

1. Create a new account on [Render](https://render.com/) if you don't have one already.

2. From your Render dashboard, click on "New" and select "Web Service".

3. Connect your GitHub repository or use the manual deploy option.

4. Configure your web service with the following settings:
   - **Name**: mern-chat-app-backend (or any name you prefer)
   - **Runtime**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Root Directory**: `backend` (if you're deploying the entire repository)

5. Add the following environment variables in the Render dashboard:
   - `NODE_ENV`: production
   - `PORT`: 5001
   - `MONGODB_URI`: Your MongoDB connection string
   - `SECRET_KEY`: Your JWT secret key
   - `CLOUDINARY_CLOUD_NAME`: Your Cloudinary cloud name
   - `CLOUDINARY_API_KEY`: Your Cloudinary API key
   - `CLOUDINARY_API_SECRET`: Your Cloudinary API secret
   - `FRONTEND_URL`: Your Vercel frontend URL (add this after deploying the frontend)

6. Click "Create Web Service" and wait for the deployment to complete.

7. Once deployed, note the URL of your Render service (e.g., https://mern-chat-app-backend.onrender.com). You'll need this URL for the frontend deployment.

## Frontend Deployment on Vercel

1. Create a new account on [Vercel](https://vercel.com/) if you don't have one already.

2. From your Vercel dashboard, click on "Add New" and select "Project".

3. Import your GitHub repository.

4. Configure your project with the following settings:
   - **Framework Preset**: Vite
   - **Root Directory**: `frontend` (if you're deploying the entire repository)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

5. Add the following environment variables in the Vercel dashboard:
   - `VITE_API_BASE_URL`: Your Render backend URL + '/api' (e.g., https://mern-chat-app-backend.onrender.com/api)
   - `VITE_SOCKET_SERVER_URL`: Your Render backend URL (e.g., https://mern-chat-app-backend.onrender.com)

6. Click "Deploy" and wait for the deployment to complete.

7. Once deployed, note the URL of your Vercel deployment (e.g., https://mern-chat-app.vercel.app).

## Final Configuration

1. Go back to your Render dashboard and update the `FRONTEND_URL` environment variable with your Vercel frontend URL.

2. Redeploy your backend service on Render to apply the changes.

## Testing the Deployment

1. Make sure all dependencies are installed correctly. If you encounter any missing package errors, you may need to manually install them:

```bash
npm install compression
# Add any other missing packages as needed
```

1. Open your Vercel frontend URL in a browser.

2. Try to sign up or log in to test the authentication.

3. Test the chat functionality to ensure real-time communication is working.

## Troubleshooting

- If you encounter CORS issues, double-check that the `FRONTEND_URL` in your backend environment variables exactly matches your Vercel URL.

- If socket connections fail, ensure that your `VITE_SOCKET_SERVER_URL` is correctly set in your Vercel environment variables.

- Check the logs in both Render and Vercel dashboards for any error messages.

- For cookie-related issues, ensure that your backend is properly setting cookies with the correct domain and secure flags.