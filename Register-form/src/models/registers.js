const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const employeeSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },

  lastname: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  gender: {
    type: String,
    required: true,
  },

  phone: {
    type: Number,
    unique: true,
  },

  age: {
    type: Number,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  confirmpassword: {
    type: String,
    required: true,
  },

  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

// generating tekens
employeeSchema.methods.generateAuthToken = async function (req, res) {
  try {
    const token = jwt.sign(
      { _id: this._id.toString() },
      "thsiissecondprivatekeyforcreatingothertokenbynitins"
    );
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    // console.log(token);
    return token;
  } catch (e) {
    res.send("the error part" + e);
    console.log("the error part" + e);
  }
};

employeeSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
    this.confirmpassword = await bcrypt.hash(this.password, 10);
  }
  next();
});

// create collection
const Register = new mongoose.model("Register", employeeSchema);

module.exports = Register;
