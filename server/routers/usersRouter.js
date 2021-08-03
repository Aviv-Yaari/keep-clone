const express = require('express');
const catchAsync = require('../middleware/catchAsync');
const {
  getAllUsers,
  createUser,
  deleteUser,
  getOneUser,
  getUserNotes,
  createNote,
} = require('../controllers/usersController');
const router = express.Router({ mergeParams: true });

router.route('/').get(catchAsync(getAllUsers)).post(catchAsync(createUser));
router.route('/:userId/').get(catchAsync(getOneUser)).delete(catchAsync(deleteUser));
router.route('/:userId/notes').get(catchAsync(getUserNotes)).post(catchAsync(createNote));

module.exports = router;
