const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: {
        type: String,
    },
    product: {
        type: String,
    },  
    email: {
        type: String,
    }
});

const users=mongoose.model('user',userSchema);

module.exports = users;
