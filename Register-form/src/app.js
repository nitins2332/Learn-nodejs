const express = require("express");
const path = require("path");
const hbs = require("hbs");
const bcrypt = require("bcryptjs");

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

      // console.log("the success part" + registerEmployee);

      const token = await registerEmployee.generateAuthToken();
      // console.log("the token part" + token);

      const registered = await registerEmployee.save();
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

    const isMatch = await bcrypt.compare(password, useremail.password);

    const token = await useremail.generateAuthToken();
    console.log("the token part " + token);

    if (isMatch) {
      res.status(201).send("<h1>login successful</h1>");
    } else {
      res.send("password are matching");
    }
  } catch (e) {
    res.status(400).send("invalid Email");
  }
});

// const bcrypt = require("bcryptjs");

const securePassword = async (password) => {
  const passwordHash = await bcrypt.hash(password, 10);
  console.log(passwordHash);

  const matchpassword = await bcrypt.compare(password, passwordHash);
  console.log(matchpassword);
};

// securePassword("thapa@123");

const jwt = require("jsonwebtoken");

const createToken = async () => {
  const token = await jwt.sign(
    { _id: "62c19fcbfb418c790fbf1b80" },
    "mynameisnitinsiknowthisisprivatekeyanditisnotprivate",
    {
      expiresIn: "2 mins",
    }
  );
  console.log(token);

  const userVer = await jwt.verify(
    token,
    "mynameisnitinsiknowthisisprivatekeyanditisnotprivate"
  );
  console.log(userVer);
};

// createToken();

app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
