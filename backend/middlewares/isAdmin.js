const jwt = require("jsonwebtoken");

const config = require('config');
const Admin = require("../models/Admin");
const secret = config.get('secret')


const isAdmin = async (req, res, next) => {
    const token1 = req.headers.authorization;
    try {
      const decoded = jwt.verify(token1, secret);
      const admin = await Admin.findById(decoded.id).select("-password");
      if (!admin) return res.status(400).json([{ msg: "unauthorized" }]);
      else {
        req.admin = admin;
        next();
      }
    } catch (error) {
      res.status(500).json({ error: error });
    }
  };
  module.exports = isAdmin;