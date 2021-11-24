
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
const config = require("config");
const Admin = require("../models/Admin");

const secret = config.get("secret");

exports.registerAdmin = async (req, res) => {
  const { fullName, email, password, phone } = req.body;
  try {
    let existantAdmin = await Admin.findOne({ email });
    if (existantAdmin)
      return res.status(401).json({ msg: "Admin already exists" });
    const newAdmin = new Admin({
      fullName,
      email,
      password,
      phone,
    });
    var salt = await bcrypt.genSalt(10);
    var hash = await bcrypt.hash(password, salt);
    newAdmin.password = hash;
    const payload = {
      id: newAdmin._id,
    };

    const token1 = await jwt.sign(payload, secret);
    await newAdmin.save();
    res.send({
      token1,
      admin: {
        _id: newAdmin._id,
        fullName: newAdmin.fullName,
        email: newAdmin.email,
        phone: newAdmin.phone,
      },
    });
  } catch (error) {
    res.status(500).json({ msg: error.msg });
  }
};

exports.loginAdmin = async (req, res) => {
  const { email, password } = req.body;
  try {
    let existantAdmin = await Admin.findOne({ email });
    if (!existantAdmin)
      return res.status(401).json({ msg: "email or password not correct" });
    let isMatch = await bcrypt.compare(password, existantAdmin.password);
    if (!isMatch)
      return res.status(401).json({ msg: "email or password not correct" });
    const payload = {
      id: existantAdmin._id,
    };
    const token1 = await jwt.sign(payload, secret);
    res.send({
      token1,
      admin: {
        _id: existantAdmin._id,
        fullName: existantAdmin.fullName,
        email: existantAdmin.email,
        phone: existantAdmin.phone,
      },
    });
  } catch (error) {
    res.status(500).json({ msg: error.msg });
  }
};


exports.getAdmin = async (req, res) => {
    res.send(req.admin);
  };