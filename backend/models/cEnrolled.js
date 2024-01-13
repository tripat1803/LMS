const mongoose = require('mongoose');
const courses = require('../models/courses');
const student = require('../models/studentDetails')
const courseStatus = require('../models/courseStatus')

const cEnrolledSchema = new mongoose.Schema({
    cno: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'courses'
    },
    srollno: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'student'
    },
    cstatus: {
        type: String,
        enum: ['Completed', 'Not completed'],
        required: true ['Have not started the course']
    },
    cedate: {
        type: Date,
        default: Date.now()
    }
})

const cenr = mongoose.model('cenr', cEnrolledSchema);

export default cenr;