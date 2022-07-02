const express = require("express");
const router = new express.Router();

const Student = require("../mongo/studentSchema");

// read the data of all registered students
router.post("/students", async (req, res) => {
  try {
    const user = new Student(req.body);
    const createUser = await user.save();
    res.status(201).send(createUser);
  } catch (err) {
    res.status(400).send(err);
  }
});

// read the data of registered students
router.get("/students", async (req, res) => {
  try {
    const studentsData = await Student.find();
    res.send(studentsData);
  } catch (err) {
    res.send(err);
  }
});

// get the indivisual student data using id
router.get("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const studentdata = await Student.findById(_id);

    if (!studentdata) {
      return res.status(404).send("page not found");
    } else {
      res.send(studentdata);
    }
  } catch (err) {
    res.send(err);
  }
});

// update the studens by it id
router.patch("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const updateStudent = await Student.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(updateStudent);
  } catch (err) {
    res.status(404).send(err);
  }
});

// delete the student by it id
router.delete("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const deletestudent = await Student.findByIdAndDelete(_id);
    if (!_id) {
      return res.status(400).send();
    }
    res.send(deletestudent);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;

console.log(__dirname);
