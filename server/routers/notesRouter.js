const express = require('express');
const catchAsync = require('../middleware/catchAsync');
const {
  updateNote,
  deleteNote,
  getAllNotes,
  getOneNote,
} = require('../controllers/notesController');
const router = express.Router({ mergeParams: true });

router.route('/notes/').get(catchAsync(getAllNotes));
router
  .route('/notes/:noteId/')
  .get(catchAsync(getOneNote))
  .delete(catchAsync(deleteNote))
  .patch(catchAsync(updateNote));

module.exports = router;
