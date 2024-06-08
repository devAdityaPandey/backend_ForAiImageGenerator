const mongoose = require("mongoose");
const imageSchema = mongoose.Schema({
    searchText: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        default: "default-user",
    },
    imageUrl: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    updatedAt: {
        type: Date,
        default: new Date(),
    }

})
const imageModel = mongoose.model('Image', imageSchema);
module.exports = imageModel;