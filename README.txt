Cart Web App Set Up 

Server Dependencies

    npm i bcrypt cors dotenv express mongoose

    npm i nodemon --save-dev

React Dependencies

    npm i axios react-router-dom @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome

// Start server
    ! Environment variable must be set to connect to MongoDB
From root directory
    cd server
    nodemon server

// Start React
    ! Front end can be viewed without MongoDB connection
From root directory
    cd client
    npm start