const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  // labels: [String],
  labels: [{ type: Schema.Types.ObjectId, ref: 'Label' }],
  notes: [{ type: Schema.Types.ObjectId, ref: 'Note' }],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
