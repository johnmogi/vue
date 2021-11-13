const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema(
  {
    itemName: String,
    itemImage: String,
    itemDescription: String,
    date: String,
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
  },
  { versionKey: false, toJSON: { virtuals: true }, id: false }
);

ItemSchema.virtual("category", {
  // category = name of the virtual field.
  ref: "Category", // Model of the joined collection
  localField: "categoryId", // Name of the local field to join.
  foreignField: "_id", // Name of the remote field to join,
  justOne: true, // Create an object and not an array
});

const Item = mongoose.model("Item", ItemSchema);

module.exports = Item;
