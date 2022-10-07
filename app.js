const express = require("express");
const createAgreement = require("./agreement/createAgreement");
const redirectBkash = require("./agreement/redirect");
const executeAgreement = require("./agreement/executeAgreement");
// const createPayment = require("./payment/createPayment");
// const { redirectBkash, executePayment } = require("./payment/executePayment");

const app = express();
const router = express.Router();
app.use(router);

// app.use(express.json());

// router.get("/", async () => {
//   executeAgreement(req, res);
//   res.redirect("https://www.google.com/");
//   res.send("Hello World...");
// });

router.get("/redirect", redirectBkash);
// router.get("/execute", executeAgreement);

setTimeout(() => {
  router.get("/execute", executeAgreement);
}, 20000);

app.listen(3000, () => {
  console.log("Listening on port 3000..");
});
