const Note = require('../models/noteSchema');
const User = require('../models/userSchema');

module.exports.getAllUsers = async (req, res) => {
  const user = await User.find();
  res.send(user);
};

module.exports.getOneUser = async (req, res) => {
  const { userId } = req.params;
  const user = await User.findById(userId)
    .populate({
      path: 'notes',
      populate: { path: 'labels', model: 'Label', select: { name: 1, color: 1 } },
    })
    .populate('labels', { name: 1, color: 1 });
  if (!user) throw new Error('User not found');
  const map = user.notes.reduce(
    (map, note) => {
      if (note.isArchived) {
        map.archived.push(note);
      } else if (note.isPinned) {
        map.pinned.push(note);
      } else {
        map.unpinned.push(note);
      }
      return map;
    },
    { pinned: [], unpinned: [], archived: [] }
  );
  const { labels, username } = user;
  res.send({ username, labels, notes: map });
};

module.exports.createUser = async (req, res) => {
  const user = new User({ ...req.body });
  await user.save();
  res.send(user);
};

module.exports.deleteUser = async (req, res) => {
  const { userId } = req.params;
  // Delete notes created by this user:
  await Note.deleteMany({ user: userId });
  // Delete the user:
  const user = await User.findByIdAndDelete(userId);
  if (!user) throw Error('User not found');
  res.send(userId);
};

module.exports.getUserNotes = async (req, res) => {
  const { userId } = req.params;
  const { text } = req.query;
  const searchQuery = text ? { text: { $regex: text, $options: 'ig' } } : {};
  const notes = await Note.find({ user: userId, ...searchQuery });
  const map = notes.reduce(
    (map, note) => {
      if (note.isArchived) {
        map.archived.push(note);
      } else if (note.isPinned) {
        map.pinned.push(note);
      } else {
        map.unpinned.push(note);
      }
      return map;
    },
    { pinned: [], unpinned: [], archived: [] }
  );
  res.send(map);
};

module.exports.createNote = async (req, res) => {
  const { userId } = req.params;
  const note = new Note({ ...req.body, user: userId });
  await note.save();
  // insert the note to the user model too:
  const user = await User.findById(userId);
  user.notes.push(note._id);
  await user.save();
  res.send(note);
};
