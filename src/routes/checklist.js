const express = require("express");
const { route } = require("express/lib/application");

const router = express.Router();

router.get("/", (req, res) => {
  console.log("Rota checklists");
  res.send();
});

router.post("/", (req, res) => {
  console.log(req.body);
  res.status(200).send(req.body);
});

router.get("/:id", (req, res) => {
  console.log(req.params);
  res.send(`ID: ${req.params.id}`);
});

router.put("/:id", (req, res) => {
  console.log(req.params);
  res.send(`PUT ID: ${req.params.id}`);
});

router.delete("/:id", (req, res) => {
  console.log(req.params);
  res.send(`DELETE ID: ${req.params.id}`);
});

module.exports = router;
