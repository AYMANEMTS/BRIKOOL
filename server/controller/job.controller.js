const Job = require('../models/Job')


const getJobs = async (req,res) => {
    try {
        const jobs = await Job.find({})
            .populate("category").populate("reviews.userId").populate("comments.userId")
        res.status(200).json({data:jobs})
    }catch (e) {
        res.status(500).json({error:e})
    }
}

const showJob = async (req,res) => {
    try {
        const job = await Job.findById(req.params.id)
        res.status(200).json({data:job})
    }catch (e) {
        res.status(500).json({error:e})
    }
}

const storeJob = async (req,res) => {
    try {
        const job = await Job.create(req.body)
        res.status(201).json({data:job})
    }catch (e) {
        res.status(500).json({error:e})
    }
}

const updateJob = async (req,res) => {
    try {
        await Job.findByIdAndUpdate(req.params.id,req.body)
        const job = await Job.findById(req.params.id)
        res.status(200).json({data:job})
    }catch (e) {
        res.status(500).json({error:e})
    }
}

const destroyJob = async (req,res) => {
    try {
        await Job.findByIdAndDelete(req.params.id)
        res.status(200).json({message: "Job deleted successfully"})
    }catch (e) {
        res.status(500).json({error:e})
    }
}

module.exports = {getJobs,showJob,storeJob,updateJob,destroyJob}