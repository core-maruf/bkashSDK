const axios = require("axios");
// const refreshToken = require("../token/refreshToken");
const grantToken = require("../token/grantToken");
const createPayment = require("../payment/createPayment");
const dotenv = require("dotenv");
dotenv.config();

const executePayment = async (req, res) => {
  const getToken = await grantToken();
  const payment = await createPayment();

  const resopnse = await axios.post(
    `https://checkout.sandbox.bka.sh/v1.2.0-beta/checkout/payment/execute/${payment.paymentID}`,
    {
      headers: {
        authorization: getToken,
        "x-app-key": process.env.APP_KEY,
        accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  const result = await executePayment.json();

  res.send(result);
};

module.exports = executePayment;
