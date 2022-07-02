const express = require("express");
const router = new express.Router();

const MensRanking = require("../models/mens");

// we will handle post req
router.post("/mens", async (req, res) => {
  try {
    const addingMensRecords = new MensRanking(req.body);
    const insertMens = await addingMensRecords.save();
    res.status(201).send(insertMens);
  } catch (err) {
    res.status(400).send(err);
  }
});

// we will handle get req
router.get("/mens", async (req, res) => {
  try {
    const getMens = await MensRanking.find({}).sort({ ranking: 1 });
    res.status(201).send(getMens);
  } catch (err) {
    res.status(400).send(err);
  }
});

// we will handle get req of indivisual men
router.get("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getMen = await MensRanking.find({ _id });
    res.status(200).send(getMen);
  } catch (err) {
    res.status(400).send(err);
  }
});

// we will handle update req of indivisual men
router.patch("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const updateMen = await MensRanking.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.status(200).send(updateMen);
  } catch (err) {
    res.status(500).send(err);
  }
});

// we will handle delete req of indivisual men
router.delete("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const deleteMen = await MensRanking.findByIdAndDelete(_id);
    res.send(deleteMen);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
