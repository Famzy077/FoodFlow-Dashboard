const express = require('express');
const app = express();
const connectDb = require('./db/connect');
const cors = require('cors');
const menuRouter = require('./routes/menuRoutes');
const orderRouter = require('./routes/order');
const router = require('./routes/User')
const profilePictureRoutes = require('./routes/profilePictureRoutes');
const bodyParser = require('body-parser');

// Middlweware

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json()); // Enable JSON body parsing
app.use(bodyParser.urlencoded({ extended: true })); // For URL encoded data


require('dotenv').config();
connectDb(); //CONNECT TO THE DATABASE
app.use(cors());
// ROUTES
app.use(menuRouter);
app.use(orderRouter);
app.use(profilePictureRoutes);
app.use('/auth',router)

app.use('/home', (req, res) => {
    res.send('<h1>Welcome to the home page</h1>');
});
const port = 5000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port} localhost:5000`);
});
