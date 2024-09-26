const mongoose = require('mongoose');



module.exports = mongoose.model('auti',{
    marka: String,
    model: String,
    godina: Number,
})