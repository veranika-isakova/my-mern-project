import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const shopSchema = new Schema({
  name: {
    defaultMessage: { type: String, required: true },
    translations: [{ language: String, message: String }],
  },
  dateAdded: { type: Date, default: Date.now, required: true },
});

export default mongoose.model('Shop', shopSchema);
