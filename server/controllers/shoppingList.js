import mongoose from 'mongoose';

const ShoppingList = mongoose.model('ShoppingList');

export const listAll = (req, res) => {
  ShoppingList.find({}, (err, task) => {
    if (err) res.send(err);

    res.json(task);
  });
};

export const createListItem = (req, res) => {
  const newList = new ShoppingList(req.body);

  newList.save((err, data) => {
    if (err) res.send(err);

    res.json({
      ...data,
      success: true
    });
  });
};
