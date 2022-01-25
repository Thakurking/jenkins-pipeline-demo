const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();

const PORT = 5050;

app.use(express.json());

app.get("/", async (req, res) => {
  return res.json({
    message: "Calling from server",
    status: true
  })
})

app.get("/get-message", async (req, res) => {
  return res.json({
    message: "Sending message from server",
    status: true
  })
})
app.post("/send-data", async (req, res) => {
  console.log(req.body);
  const {
    name,
    email,
    phone
  } = req.body;
  axios
    .post(`${process.env.URL_PATH}`, {
      name,
      email,
      phone,
    })
    .then(async (result) => {
      console.log(result.data);
      return res.json({
        data: result.data
      })
    })
    .catch((error) => {
      console.log(error);
    });
});

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});

// https://enu4xjz50kvuzhs.m.pipedream.net
