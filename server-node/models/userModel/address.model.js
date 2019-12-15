const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    user_id:{
        type: mongoose.Schema.ObjectId,
        ref: 'users'
    },
    address: {
        type: String,
    },
    city: {
        type: String,
    }
});

const address=mongoose.model('addresses',userSchema);

module.exports = address;
