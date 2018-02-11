import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const shopSchema = new Schema({
  name: { type: 'String', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('Shop', shopSchema);
