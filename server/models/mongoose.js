const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mongoose_dashboard', (err) => {
    console.log('This is the error ' + err);
});
const animalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    age: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        required: true
    }
});

module.exports = Dashboard = mongoose.model("Dashboard", animalSchema);