const mongoose = require('mongoose');

const JobSchema = mongoose.Schema({
    image: {type: String, required: false},
    description: {type: String, required:true,min:10},
    contact: {type: [String],required: true,default: []},
    status: {type: String, default: "active"},
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    ratings : [{
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        rating: { type: Number, required: true, min: 1, max: 5 },
        createdAt: { type: Date, default: Date.now }
    }],
    comments: [{
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        comment: { type: String, required: true, maxlength: 500 },
        createdAt: { type: Date, default: Date.now }
    }],
    workingTime: {
        days: { type: [String], required: true },
        startTime: { type: String, required: true },
        endTime: { type: String, required: true }
    }
},{timestamps: true})

const Job = mongoose.models.Job || mongoose.model('Job', JobSchema);
module.exports = Job;


