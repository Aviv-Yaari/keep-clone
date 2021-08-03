const mongoose = require('mongoose');
const User = require('./userSchema');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  heading: String,
  text: String,
  isPinned: Boolean,
  isArchived: Boolean,
  color: String,
  imageUrl: String,
  labels: [{ type: Schema.Types.ObjectId, ref: 'Label' }],
});

noteSchema.index({ text: 'text' });

const Note = mongoose.model('Note', noteSchema);

noteSchema.path('user').validate(async (value) => {
  return await User.findById(value);
}, 'User does not exist');

module.exports = Note;
