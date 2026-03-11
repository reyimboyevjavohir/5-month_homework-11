const { Schema, model } = require('mongoose')

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Category nomi majburiy'],
      trim: true,
      unique: true,
    },
    slug: {
      type: String,
      required: [true, 'Slug majburiy'],
      trim: true,
      unique: true,
      lowercase: true,
    },
    image: {
      type: String,
      required: [true, 'Category rasmi majburiy'],
      trim: true,
    },
    description: {
      type: String,
      default: '',
      trim: true,
    },
    order: {
      type: Number,
      default: 0,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
)

module.exports = model('Category', categorySchema)
