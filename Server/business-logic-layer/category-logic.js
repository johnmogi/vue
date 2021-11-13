const dal = require("../data-access-layer/dal");
const Category = require("../models/category");

function addCategoryAsync(category) {
  return category.save();
}

function getAllCatsAsync() {
  return new Promise((resolve, reject) => {
    Category.find({}, (err, cats) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(cats);
    });
  });
}

function getOneCategoryAsync(_id) {
  return new Promise((resolve, reject) => {
    Category.findOne({ _id }, (err, category) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(category);
    });
  });
}

function updateCategoryAsync(category) {
  return new Promise((resolve, reject) => {
    Category.updateOne({ _id: category._id }, category, (err, info) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(info.n ? category : null); // info.n - מספר המוצרים שנמצאו
    });
  });
}

function deleteCategoryAsync(_id) {
  return new Promise((resolve, reject) => {
    Category.deleteOne({ _id }, (err, info) => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });
}

// Comparison Query Operators:
// $gt  - Greater Than...
// $gte - Greater Than or Equal
// $lt  - Less Than
// $lte - Less Than or Equal
// $eq  - Equal
// $ne  - Not Equal
// $in  - In
// $nin - Not In

function getCatsByPriceRangeAsync(minPrice, maxPrice) {
  return new Promise((resolve, reject) => {
    Category.find(
      { price: { $gte: minPrice, $lte: maxPrice } },
      (err, cats) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(cats);
      }
    );
  });
}

module.exports = {
  addCategoryAsync,
  getAllCatsAsync,
  getOneCategoryAsync,
  updateCategoryAsync,
  deleteCategoryAsync,
  getCatsByPriceRangeAsync,
};
