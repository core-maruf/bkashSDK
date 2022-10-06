const axios = require("axios");
// const refreshToken = require("../token/refreshToken");
const grantToken = require("../token/grantToken");
const dotenv = require("dotenv");
const { request, response } = require("express");
dotenv.config();

// const getToken = async () => {
//   return await grantToken();
// };

const createAgreement = async (req, res) => {
  const getToken = await grantToken();
  const response = await axios.post(
    "https://tokenized.sandbox.bka.sh/v1.2.0-beta/tokenized/checkout/create",
    // '\n{\n     "mode": "0000",\n     "callbackURL": "http://localhost:3030/",\n     "payerReference": "01611156651"\n}\n',
    {
      mode: "0000",
      callbackURL: "http://localhost:3000/",
      payerReference: "01611156651",
    },
    {
      headers: {
        Authorization: getToken,
        "X-APP-Key": process.env.APP_KEY,
        accept: "application/json",
        "content-type": "application/json",
      },
    }
  );

  //   if (response.status.message == "Successful") {
  //     res.redirect =
  //       "https://sandbox.payment.bkash.com/redirect/tokenized/?paymentID=TR0000WK1665036733218&hash=.rm!SwK6uRC6(Dd!Y2fuuxmgAcv3uiJkJkSCDYZ2C)bjnGs8Gr9v(YsQX_fmpP*E8eVC6gJ-auF35iK6M3BfAHdLd92tDTwhWJ*Z1665036733477&mode=0000&apiVersion=v1.2.0-beta";
  //   }

  //   console.log(response.data.paymentID);
  //   console.log(response.data.bkashURL);
  const credentials = {
    paymentID: response.data.paymentID,
    bkashURL: response.data.bkashURL,
  };
  return credentials;
};

module.exports = createAgreement;
