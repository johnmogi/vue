const express = require("express");
const catsLogic = require("../business-logic-layer/category-logic");
const Category = require("../models/category");
const router = express.Router();

// GET http://localhost:3000/api/cats
router.get("/", async (request, response) => {
  try {
    const cats = await catsLogic.getAllCatsAsync();
    response.json(cats);
  } catch (err) {
    console.log(err);
    response.status(500).send(err.message);
  }
});

// GET http://localhost:3000/api/cats/7
router.get("/:_id", async (request, response) => {
  try {
    const _id = request.params._id;
    const category = await catsLogic.getOneCategoryAsync(_id);

    if (!category) {
      response.sendStatus(404);
      return;
    }

    response.json(category);
  } catch (err) {
    response.status(500).send(err.message);
  }
});

// POST http://localhost:3000/api/cats
router.post("/", async (request, response) => {
  const body = request.body;
  try {
    const category = new Category(body);
    const addedCategory = await catsLogic.addCategoryAsync(category);
    response.status(201).json(addedCategory);
  } catch (err) {
    response.status(500).send(err.message);
  }
});

// PUT http://localhost:3000/api/cats/7
router.put("/:_id", async (request, response) => {
  try {
    const _id = request.params._id;
    const category = new Category(request.body);
    category._id = _id;
    const updatedCategory = await catsLogic.updateCategoryAsync(category);

    if (updatedCategory === null) {
      response.sendStatus(404);
      return;
    }

    response.json(updatedCategory);
  } catch (err) {
    response.status(500).send(err.message);
  }
});

// PATCH http://localhost:3000/api/cats/7
router.patch("/:_id", async (request, response) => {
  const _id = request.params._id;
  try {
    console.log(_id);
    const category = new Category(request.body);
    category._id = _id;
    const updatedCategory = await catsLogic.updateCategoryAsync(category);

    if (updatedCategory === null) {
      response.sendStatus(404);
      return;
    }

    response.json(updatedCategory);
  } catch (err) {
    response.status(500).send(err.message);
  }
});

// DELETE http://localhost:3000/api/cats/7
router.delete("/:_id", async (request, response) => {
  try {
    const _id = request.params._id;
    await catsLogic.deleteCategoryAsync(_id);
    response.sendStatus(204);
  } catch (err) {
    response.status(500).send(err.message);
  }
});

// --------------------------------------------------
// Queries:
router.get("/by-price-range/:minPrice/:maxPrice", async (request, response) => {
  try {
    const minPrice = +request.params.minPrice;
    const maxPrice = +request.params.maxPrice;
    const cats = await catsLogic.getCatsByPriceRangeAsync(minPrice, maxPrice);
    response.json(cats);
  } catch (err) {
    response.status(500).send(err.message);
  }
});

module.exports = router;
