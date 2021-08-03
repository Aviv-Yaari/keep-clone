const Label = require('../models/labelSchema');
const Note = require('../models/noteSchema');
const User = require('../models/userSchema');

module.exports.createLabel = async (req, res) => {
  const { userId } = req.params;
  const { name, color } = req.body;
  const label = new Label({ user: userId, name, color });
  await label.save();
  await User.findByIdAndUpdate(userId, { $push: { labels: label._id } });
  res.send(label);
};

module.exports.deleteLabel = async (req, res) => {
  const { userId, labelId } = req.params;
  // Remove label from notes model:
  await Note.updateMany({ labels: labelId }, { $pull: { labels: [labelId] } });
  // Remove label from user model:
  await User.findByIdAndUpdate(userId, { $pull: { labels: [labelId] } }, { runValidators: true });
  // Remove label from label model:
  await Label.findByIdAndDelete(labelId);
  res.send(labelId);
};

module.exports.updateLabel = async (req, res) => {
  const { labelId } = req.params;
  const label = await Label.findByIdAndUpdate(labelId, req.body, { new: true });
  res.send(label);
};
