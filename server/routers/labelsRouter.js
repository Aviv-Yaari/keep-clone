const express = require('express');
const { createLabel, deleteLabel, updateLabel } = require('../controllers/labelsController');
const catchAsync = require('../middleware/catchAsync');
const router = express.Router({ mergeParams: true });

router.route('/users/:userId/labels').post(catchAsync(createLabel));
router.route('/labels/:labelId').delete(catchAsync(deleteLabel)).patch(catchAsync(updateLabel));

module.exports = router;
