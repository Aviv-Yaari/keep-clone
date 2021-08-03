const Note = require('../models/noteSchema');
const User = require('../models/userSchema');

module.exports.getAllNotes = async (req, res) => {
  const notes = await Note.find().populate({ path: 'user', select: 'username' });
  res.send(notes);
};

module.exports.deleteNote = async (req, res) => {
  const { noteId } = req.params;
  let warnings = [];
  const note = await Note.findByIdAndDelete(noteId);
  if (!note) warnings.push('Could not find a note to delete.');
  // delete from the user model too:
  const user = await User.findById(note.user);
  const noteIndex = user.notes.findIndex((userNote) => userNote === note);
  if (!noteIndex) {
    warnings.push('Could not delete note from user model.');
  } else {
    user.notes.splice(noteIndex, 1);
    await user.save();
  }
  res.send({ deletedNote: note, warnings });
};

module.exports.updateNote = async (req, res) => {
  const { noteId } = req.params;
  // const { text, isPinned, isArchived, color } = req.body;
  // const note = await Note.findByIdAndUpdate(noteId, { text, isPinned, isArchived, color });
  const note = await Note.findByIdAndUpdate(noteId, req.body, { runValidators: true }).populate(
    'labels',
    { name: 1, color: 1 }
  );
  if (!note) throw new Error('Note not found');
  res.send(note);
};

module.exports.getOneNote = async (req, res) => {
  const { noteId } = req.params;
  const note = await Note.findById(noteId).populate({ path: 'user', select: 'username' });
  if (!note) throw new Error('Note not found');
  res.send(note);
};
