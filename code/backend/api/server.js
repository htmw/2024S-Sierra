const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3000;

const API_URL = "https://www.fruityvice.com/api/fruit/all";

app.get("/api/fruit/:fruitName", async (req, res) => {
  const { fruitName } = req.params;

  try {
    const response = await axios.get(API_URL);
    const fruits = response.data;
    const fruitData = fruits.find(
      (fruit) => fruit.name.toLowerCase() === fruitName.toLowerCase(),
    );

    if (fruitData) {
      res.status(200).json(fruitData);
    } else {
      res.status(404).json({ message: "Fruit not found" });
    }
  } catch (error) {
    console.error("Error fetching fruits:", error);
    res.status(500).json({ message: "Failed to retrieve fruit data" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
