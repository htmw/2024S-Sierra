const express = require("express");
const cors = require("cors");
const modelLoader = require("./modelLoader");
const predictRoute = require("./predictRoute");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ extended: true, limit: "25mb" }));

app.use("/predict", predictRoute);

modelLoader.loadModel()
  .then(() => {
    app.listen(port, () => {
      console.log('Server is running');
    });
  })
  .catch((error) => {
    console.error("Failed to load model:", error);
  });
