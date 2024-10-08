const express = require('express');
const router = express.Router();
const checkValidation = require("../middlewares/checkValidation");
const protectedRoute = require("../middlewares/protectedRoute");
const {destroyJob,updateJob,storeJob,showJob,getJobs} = require('../controller/job.controller')
const {jobForm} = require('../validators/jobValidation')


router.get('/',getJobs)
router.get('/:id',showJob)
router.post('/',protectedRoute,jobForm,checkValidation,storeJob)
router.put('/:id',protectedRoute,jobForm,checkValidation,updateJob)
router.delete('/:id',protectedRoute,destroyJob)

module.exports = router