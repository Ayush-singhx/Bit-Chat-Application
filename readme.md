# MERN Chat App

A full-stack chat application built using React (Vite), MongoDB, Node.js, Express, Socket.io, Tailwind CSS, and DaisyUI.

## Tech Stack

- **React (Vite)**: Frontend framework
- **MongoDB**: NoSQL database
- **Node.js**: JavaScript runtime
- **Express**: Web framework for Node.js
- **Socket.io**: Real-time communication
- **Tailwind CSS**: Utility-first CSS framework
- **DaisyUI**: Tailwind CSS components

![React](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg)
![MongoDB](https://upload.wikimedia.org/wikipedia/en/4/45/MongoDB-Logo.svg)
![Node.js](https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg)
![Express](https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png)
![Socket.io](https://upload.wikimedia.org/wikipedia/commons/9/96/Socket-io.svg)
![Tailwind CSS](https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg)
![DaisyUI](https://daisyui.com/images/logo.svg)

## Features

- Real-time messaging
- User authentication
- Responsive design
- Customizable UI with DaisyUI

## Project Setup

1. **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/MERNChatApp.git
    cd MERNChatApp
    ```

2. **Install dependencies**
    ```bash
    # Install server dependencies
    cd server
    npm install

    # Install client dependencies
    cd ../client
    npm install
    ```

3. **Set up environment variables**

    Create a `.env` file in the `server` directory and add the following:
    ```env
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```

4. **Run the application**

    ```bash
    # Run server
    cd server
    npm start

    # Run client
    cd ../client
    npm run dev
    ```

5. **Open your browser**

    Navigate to `http://localhost:3000` to see the application in action.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

## Contact

For any inquiries, please contact [ayush2524mishra@gmail.com].
