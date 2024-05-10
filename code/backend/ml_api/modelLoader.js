// const tf = require("@tensorflow/tfjs-node");

// let globalModel;

// async function loadModel() {
//   try {
//     globalModel = await tf.loadLayersModel("file://./model/model.json");
//   } catch (error) {
//     throw error;
//   }
// }

// function getModel() {
//   return globalModel;
// }

// module.exports = {
//   loadModel,
//   getModel,
// };



// ////////////////////////////////////////////// updated /////////////////////////////////////




const tf = require("@tensorflow/tfjs-node");

// Global variable to hold the loaded model
let globalModel = null;

// Load the model from the specified path
const loadModel = async () => {
  try {
    globalModel = await tf.loadLayersModel("file://./model/model.json");
  } catch (error) {
    console.error("Error loading model:", error);
    throw new Error("Model loading failed");
  }
};

// Get the loaded model
const getModel = () => {
  if (!globalModel) {
    throw new Error("Model not loaded yet");
  }
  return globalModel;
};

module.exports = {
  loadModel,
  getModel,
};
