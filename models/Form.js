import mongoose from 'mongoose';

const formSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  prize: { type: Number, required: true, min: 0 },
  image: {
    data: Buffer,
    contentType: String,
  },
  year: { type: String, enum: ['2021', '2022', '2023', '2024'], required: true },
  field: { type: String, enum: ['Science', 'Arts', 'Commerce', 'Engineering'], required: true },
}, {
  timestamps: true,
});

export default mongoose.models.Form || mongoose.model('Form', formSchema);
