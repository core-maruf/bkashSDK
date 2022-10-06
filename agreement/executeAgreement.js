const axios = require("axios");
const createAgreement = require("../agreement/createAgreement");
const grantToken = require("../token/grantToken");

const dotenv = require("dotenv");
dotenv.config();

const executeAgreement = async (req, res) => {
  console.log(res);
  const getToken = await grantToken();
  const { paymentID, bkashURL } = await createAgreement();
  if (!bkashURL || !paymentID)
    return res.status(400).send("Something went wrong");
  // console.log(bkashURL);

  const response = await axios.post(
    "https://tokenized.sandbox.bka.sh/v1.2.0-beta/tokenized/checkout/execute",
    // '\n{\n     "paymentID": "TR0000701665035085738"\n}\n',
    {
      paymentID: paymentID,
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
  console.log(response.data);
};
module.exports = executeAgreement;
