const mongoose = require('mongoose');
const connect = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/dinerpro')
            console.log('Successfully connected to the datBase')
    } catch (error) {
        console.error('Error connecting to the database: ', error);
    
    }
}
module.exports = connect;