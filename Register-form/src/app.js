const express = require("express");
const path = require("path");
const hbs = require("hbs");

const app = express();
require("./db/conn");

const Register = require("./models/registers");

const port = process.env.PORT || 4000;

// const static_path = path.join(__dirname, "../public");
const hbsfile_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", hbsfile_path);
hbs.registerPartials(partials_path);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", async (req, res) => {
  try {
    const password = req.body.password;
    const cpassword = req.body.confirmpassword;

    if (password === cpassword) {
      const registerEmployee = new Register({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        gender: req.body.gender,
        phone: req.body.phone,
        age: req.body.age,
        password: req.body.password,
        confirmpassword: req.body.confirmpassword,
      });

      const registered = await registerEmployee.save();
      // console.log(registered);
      res.status(201).render("thanks");
    } else {
      res.send("password are not match");
    }
  } catch (err) {
    res.status(400).send(err);
  }
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", async (req, res) => {
  try {
    const _email = req.body.email;
    const password = req.body.password;

    const useremail = await Register.findOne({ email: _email });

    if (useremail.password === password) {
      res.status(201).send("<h1>login successful</h1>");
    } else {
      res.send("password are matching");
    }
  } catch (e) {
    res.status(400).send("invalid Email");
  }
});

app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
