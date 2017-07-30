import mongoose from 'mongoose';

const List = mongoose.model('List');

export const listAll = (req, res) => {
  List.find({}, (err, task) => {
    if (err) res.send(err);

    res.json(task);
  });
};

export const createListItem = (req, res) => {
  const newList = new List(req.body);

  newList.save((err, data) => {
    if (err) res.send(err);

    res.json({
      ...data,
      success: true
    });
  });
};
