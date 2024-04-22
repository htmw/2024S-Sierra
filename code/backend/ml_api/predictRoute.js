const express = require("express");
const tf = require("@tensorflow/tfjs-node");
const modelLoader = require("./modelLoader");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const imageBuffer = Buffer.from(req.body.image, "base64");
    const tensor = tf.node
      .decodeImage(imageBuffer, 3)
      .resizeNearestNeighbor([224, 224])
      .toFloat()
      .expandDims();

    const normalizedTensor = tensor.div(255.0);

    const model = modelLoader.getModel();
    const predictionTensor = model.predict(normalizedTensor);
    const probabilities = await predictionTensor.array();

    res.json({ probabilities: probabilities[0] });

    tensor.dispose();
    normalizedTensor.dispose();
    predictionTensor.dispose();
  } catch (error) {
    console.error("Error processing the image:", error);
    res.status(500).send("Error processing the image: " + error.message);
  }
});

module.exports = router;
