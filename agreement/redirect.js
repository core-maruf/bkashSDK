const axios = require("axios");
const createAgreement = require("../agreement/createAgreement");
const grantToken = require("../token/grantToken");

const dotenv = require("dotenv");
dotenv.config();

//redirecting to bkashURL
const redirectBkash = async (req, res, next) => {
  const { bkashURL } = await createAgreement();
  res.redirect(bkashURL);
  next();
  // if (!bkashURL || !paymentID) {
  //   // console.log(bkashURL);
  //   return res.status(400).send("Something went wrong");
  // } else {
  //   res.redirect(bkashURL);
  // }
};

module.exports = redirectBkash;
