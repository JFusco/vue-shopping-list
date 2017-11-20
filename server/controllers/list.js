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

export const deleteListItem = (req, res) => {
  List.findByIdAndRemove(req.query.id, (err, item) => {
    if (err) res.send(err);

    const response = {
      message: 'Success',
      id: item._id
    };

    res.status(200).send(response);
  });
};
