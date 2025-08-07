# MERN Chat App

A full-stack chat application built using React (Vite), MongoDB, Node.js, Express, Socket.io, Tailwind CSS, and DaisyUI.


## 🔧 Tech Stack

| **Technology**      | **Usage**                                      |
|----------------------|-----------------------------------------------|
| **React** | Frontend development for a fast and efficient UI. |
| **Tailwind CSS** | Styling framework for responsive design.       |
| **DaisyUI** | Pre-styled UI components for rapid development.|
| **NodeJS** | Backend runtime environment.                  |
| **Express** | Backend framework for building APIs.          |
| **Socket.IO** | Real-time bi-directional communication.       |
| **MongoDB** | NoSQL database for scalable data storage.     |

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![Socket.IO](https://img.shields.io/badge/Socket.IO-010101?style=for-the-badge&logo=socket.io&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![DaisyUI](https://img.shields.io/badge/DaisyUI-5A67D8?style=for-the-badge&logo=daisyui&logoColor=white)
---

## 🛠 Features
- **Real-Time Chat**: Powered by Socket.IO for instant communication.
- **Responsive Design**: Built with Tailwind CSS and DaisyUI for a visually appealing, mobile-friendly interface.
- **User Authentication**: Secure login and registration system.
- **Group Chats**: Support for creating and managing group conversations.
- **Typing Indicators**: Real-time feedback for user activity.
- **Message Notifications**: Stay informed about new messages.
- **Scalable Backend**: Built with Node.js and Express, with MongoDB as the database.

## Project Setup

1. **Clone the repository**
    ```bash
    git clone https://github.com/mAyush24/fullstack-chat-app.git
    cd fullstack-chat-app
    ```

2. **Install dependencies**
    ```bash
    # Install frontend dependencies
    cd frontend
    npm install

    # Install backend dependencies
    cd backend
    npm install
    ```

3. **Set up environment variables**

    Create a `.env` file in the `backend` directory and add the following:
    ```env
    MONGO_URI=your_mongodb_connection_string
    PORT=5001
    SECRET_KEY=your_jwt_secret
    CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
    CLOUDINARY_API_KEY=your_cloudinary_api_key
    CLOUDINARY_API_SECRET=your_cloudinary_api_secret
    NODE_ENV=development
    ```

4. **Run the application**

    ```bash
    # Run server
    cd backend
    npm run dev

    # Run client
    cd frontend
    npm run dev
    ```

5. **Open your browser**

    Navigate to `http://localhost:5173` to see the application in action.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## Contact

For any inquiries, please contact [ayushsingh2081@mail.com].
