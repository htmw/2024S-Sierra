/************************************ old code *********************************************** */

// const express = require("express");
// const cors = require("cors");
// const modelLoader = require("./modelLoader");
// const predictRoute = require("./predictRoute");

// const app = express();
// const port = 3000;

// app.use(cors());
// app.use(express.json({ limit: "25mb" }));
// app.use(express.urlencoded({ extended: true, limit: "25mb" }));

// app.use("/predict", predictRoute);

// modelLoader.loadModel()
//   .then(() => {
//     app.listen(port, () => {
//       console.log('Server is running');
//     });
//   })
//   .catch((error) => {
//     console.error("Failed to load model:", error);
//   });






// /////////////////////////////////////////// Updated Code ////////////////////////////////////////

const express = require("express");
const cors = require("cors");
const modelLoader = require("./modelLoader");
const predictRoute = require("./predictRoute");

const app = express();
const PORT = 3000;

// Apply middleware
app.use(cors());
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ extended: true, limit: "25mb" }));

// Define routes
app.use("/predict", predictRoute);

// Load the model and start the server
const startServer = async () => {
  try {
    await modelLoader.loadModel();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to load the model:", error);
    process.exit(1); // Exit with a non-zero status code on failure
  }
};

startServer();
