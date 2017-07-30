import mongoose from 'mongoose';

const Schema = mongoose.Schema;

var ListSchema = new Schema({
  name: {
    type: String
  },
  createdDate: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('List', ListSchema);
