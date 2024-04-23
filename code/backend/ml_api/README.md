# Image Classification API

This project provides an API for image classification using a pre-trained TensorFlow.js model.

## Prerequisites

- Node.js (version 12 or above)
- npm (Node Package Manager)

## Setup

1. Clone the repository or download the project files.
2. Run `npm install` to install the dependencies.
3. Place your trained model files in the `model` directory.

## Running the API

1. Start the server by running `node app.js`.
2. Send a POST request to `http://localhost:3000/predict` with the base64-encoded image data.
3. The API will respond with the predicted probabilities for each class.

## Project Structure

- `app.js`: Main entry point of the application.
- `modelLoader.js`: Functions for loading the TensorFlow.js model.
- `predictRoute.js`: Defines the `/predict` route handler.
- `model/`: Directory containing the trained model files.
