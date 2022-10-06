const { response } = require("express");
const express = require("express");
const createAgreement = require("./agreement/createAgreement");
const executeAgreement = require("./agreement/executeAgreement");
// const grantToken = require("./token/grantToken");

const app = express();
const router = express.Router();
app.use(router);

// app.use(express.json());

// (async () => {
//   const getToken = await grantToken();
//   console.log(getToken);
// })();

// executeAgreement();

// app.use(executeAgreement(), (req, res, next) => {
//   if (response.status.message == "Successful") {
//     res.redirect =
//       "https://sandbox.payment.bkash.com/redirect/tokenized/?paymentID=TR0000WK1665036733218&hash=.rm!SwK6uRC6(Dd!Y2fuuxmgAcv3uiJkJkSCDYZ2C)bjnGs8Gr9v(YsQX_fmpP*E8eVC6gJ-auF35iK6M3BfAHdLd92tDTwhWJ*Z1665036733477&mode=0000&apiVersion=v1.2.0-beta";
//     next();
//   }
// });

router.get("/", async (req, res) => {
  executeAgreement(req, res);
});

app.listen(3000, () => {
  console.log("Listening on port 3000..");
  // createAgreement();
});
