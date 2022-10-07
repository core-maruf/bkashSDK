const axios = require("axios");
const createAgreement = require("../agreement/createAgreement");
// const grantToken = require("../token/grantToken");

const dotenv = require("dotenv");
dotenv.config();

//executing agremment after bkashURL validation.
const executeAgreement = async (req, res) => {
  // const getToken = await grantToken();
  const { token } = await createAgreement();
  const { paymentID } = await createAgreement();
  const response = await axios.post(
    "https://tokenized.sandbox.bka.sh/v1.2.0-beta/tokenized/checkout/execute",
    // '\n{\n     "paymentID": "TR0000701665035085738"\n}\n',
    {
      paymentID: paymentID,
    },
    {
      headers: {
        Authorization: token,
        "X-APP-Key": process.env.APP_KEY,
        accept: "application/json",
        "content-type": "application/json",
      },
    }
  );
  console.log(response.data);
  res.send(response.data);
};

module.exports = executeAgreement;
