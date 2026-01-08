const mongoose = require("mongoose");

/*  */
const maCollection = new mongoose.Schema(
    {
        title: {
            type: String,
            default: '',
            required: true,
            minlength: 3,
            maxlength: 120
        },
        description: {
            type: String,
            required: false,
            minlength: 0,
            maxlength: 500
        },
        done: {
            type: Boolean,
            default: false,
        },
        createdAt: {
            type: Date,
            required: true,
            default: Date.now
        },
        updatedAt: {
            type: Date,
            required: true,
            default: Date.now
        }
    }
)

module.exports = mongoose.model("Task", maCollection);