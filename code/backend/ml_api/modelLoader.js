const tf = require("@tensorflow/tfjs-node");

let globalModel;

async function loadModel() {
  try {
    globalModel = await tf.loadLayersModel("file://./model/model.json");
  } catch (error) {
    throw error;
  }
}

function getModel() {
  return globalModel;
}

module.exports = {
  loadModel,
  getModel,
};
