const express = require("express");
const categoryController=require("../controllers/catagory.controller")


const router = express.Router();

router.route("/")
  .post(categoryController.createCatagory)
  .get(categoryController.getCategoris);

router.route("/:id")
  .get(categoryController.getCategoryById)
  .patch(categoryController.updateCategory);


module.exports = router;