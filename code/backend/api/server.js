// const express = require("express");
// const axios = require("axios");

// const app = express();
// const PORT = 3000;

// const API_URL = "https://www.fruityvice.com/api/fruit/all";

// app.get("/api/fruit/:fruitName", async (req, res) => {
//   const { fruitName } = req.params;

//   try {
//     const response = await axios.get(API_URL);
//     const fruits = response.data;
//     const fruitData = fruits.find(
//       (fruit) => fruit.name.toLowerCase() === fruitName.toLowerCase(),
//     );

//     if (fruitData) {
//       res.status(200).json(fruitData);
//     } else {
//       res.status(404).json({ message: "Fruit not found" });
//     }
//   } catch (error) {
//     console.error("Error fetching fruits:", error);
//     res.status(500).json({ message: "Failed to retrieve fruit data" });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });



const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3000;

const FRUITYVICE_API_URL = "https://www.fruityvice.com/api/fruit/all";

// Middleware to fetch all fruit data once, caching for improved performance
let allFruits = null;

const fetchAllFruits = async () => {
  try {
    const response = await axios.get(FRUITYVICE_API_URL);
    allFruits = response.data;
  } catch (error) {
    console.error("Error fetching fruit data:", error);
  }
};

// Initialize fruit data cache
fetchAllFruits();

app.get("/api/fruit/:fruitName", (req, res) => {
  const { fruitName } = req.params;

  if (!allFruits) {
    return res.status(503).json({ message: "Fruit data unavailable, please try again later" });
  }

  const fruitData = allFruits.find(
    (fruit) => fruit.name.toLowerCase() === fruitName.toLowerCase(),
  );

  if (fruitData) {
    res.status(200).json(fruitData);
  } else {
    res.status(404).json({ message: "Fruit not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
