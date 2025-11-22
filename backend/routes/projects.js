const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const projectCtrl = require("../controllers/projectController");

router.post("/create", auth, projectCtrl.createProject);
router.get("/all", projectCtrl.getAll);
router.get("/:id", projectCtrl.getById);
router.get("/developer/:developerId", projectCtrl.getByDeveloper);

module.exports = router;
