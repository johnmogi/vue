const mongoose = require("mongoose");

// Schema:
const CategorySchema = new mongoose.Schema(
  {
    name: String,
    description: String,
  },
  {
    versionKey: false,
    toJSON: { virtuals: true },
    id: false,
  }
);

CategorySchema.virtual("items", {
  ref: "Item",
  localField: "_id",
  foreignField: "categoryId",
});

// Model:
const Category = mongoose.model("Category", CategorySchema, "categories"); // Category = Model Name, CategorySchema = Model Schema, categories = Collection Name

module.exports = Category;
