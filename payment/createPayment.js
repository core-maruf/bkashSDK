const axios = require("axios");
// const refreshToken = require("../token/refreshToken");
const { v4: uuidv4 } = require("uuid");
const grantToken = require("../token/grantToken");
const dotenv = require("dotenv");
dotenv.config();

const createPayment = async (req, res) => {
  const getToken = await grantToken();
  const resopnse = await axios.post(
    "https://checkout.sandbox.bka.sh/v1.2.0-beta/checkout/payment/create",
    {
      headers: {
        authorization: getToken,
        "x-app-key": process.env.APP_KEY,
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: "20",
        currency: "BDT",
        intent: "sale",
        merchantInvoiceNumber: uuidv4(),
      }),
    }
  );
  return resopnse.data;
};

module.exports = createPayment;
