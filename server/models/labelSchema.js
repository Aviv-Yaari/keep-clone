const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const labelSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  color: { type: String, required: true },
});

const Label = mongoose.model('Label', labelSchema);

module.exports = Label;
