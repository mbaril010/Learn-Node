const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const storeSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: 'Please enter a store name'
    }
});

storeSchema.pre('save', function(next){
    if (!this.isModified('name')){
        next();
        return;
    }
    next();
});


module.exports = mongoose.model('Store', storeSchema);