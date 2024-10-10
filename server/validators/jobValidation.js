const { check, body } = require('express-validator');
const Job = require('../models/Job');

exports.jobForm = [
    check('image')
        .optional(),
        // .isURL().withMessage('Image must be a valid URL'),

    check('description')
        .notEmpty().withMessage('Description is required')
        .isLength({ min: 10 }).withMessage('Description must be at least 10 characters long'),

    check('contact')
        .isArray().withMessage('Contact is required')
        .custom((value) => {
            // Check that all items in the array are strings
            value.forEach((val) => {
                if (typeof val !== 'string') {
                    throw new Error('All contact values must be strings');
                }
            });
            return true; // Return true if validation passes
        }),

    check('status')
        .optional()
        .isIn(['active', 'inactive','suspended']).withMessage('Status must be either active or inactive'),

    check('category')
        .notEmpty().withMessage('Category is required')
        .isMongoId().withMessage('Invalid category ID format'),  

    check('ratings.*.userId')
        .optional()
        .isMongoId().withMessage('Invalid user ID format for review'), // Validate userId in reviews if present

    check('ratings.*.rating')
        .optional()
        .isNumeric().withMessage('Rating must be a number')
        .isInt({ min: 1, max: 5 }).withMessage('Rating must be between 1 and 5'), // Validate rating value

    check('comments.*.userId')
        .optional()
        .isMongoId().withMessage('Invalid user ID format for comment'), // Validate userId in comments if present

    check('comments.*.comment')
        .optional()
        .isString().withMessage('Comment must be a string')
        .isLength({ max: 500 }).withMessage('Comment must not exceed 500 characters'), // Validate comment length

    check('workingTime')
        .optional()
        .isObject().withMessage('Working time must be an object') // Validate as an object
        .custom((value) => {
            if (!value.days || !Array.isArray(value.days)) {
                throw new Error('Days must be an array of strings');
            }
            if (typeof value.startTime !== 'string' || typeof value.endTime !== 'string') {
                throw new Error('Start time and end time must be strings');
            }
            return true; // Return true if validation passes
        }),
];
