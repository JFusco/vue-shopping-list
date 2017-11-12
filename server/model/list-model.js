import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ListSchema = new Schema({
  name: {
    type: String
  },
  createdDate: {
    type: Date,
    'default': Date.now
  }
});

export default mongoose.model('List', ListSchema);
