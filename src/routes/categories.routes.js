const express = require("express");
const categoriesRoutes = express();
const verifyCategory = require("../middleware/verifyCategoryExists");

const getAllCategories = require("../controllers/categoriesControllers/index");

categoriesRoutes.get("/categoria", getAllCategories);

module.exports = categoriesRoutes;
