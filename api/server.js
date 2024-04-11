const express = require("express");
const mysql = require("mysql");
const multer = require("multer");
const { spawn } = require("child_process");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const upload = multer({ dest: "uploads/" });

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the database");
});

app.post("/predict", upload.single("image"), (req, res) => {
  if (!req.file) {
    res.status(400).json({ error: "No image file uploaded" });
    return;
  }

  const imagePath = req.file.path;

  const pythonProcess = spawn("python", ["predict_fruit.py", imagePath]);

  pythonProcess.stdout.on("data", (data) => {
    const fruit = data.toString().trim();

    const query = "SELECT * FROM fruit_nutrients WHERE fruit = ?";
    connection.query(query, [fruit], (err, results) => {
      if (err) {
        console.error("Error executing SQL query:", err);
        res.status(500).json({ error: "Internal server error" });
        return;
      }

      if (results.length === 0) {
        res.status(404).json({ error: "Fruit not found in the database" });
        return;
      }

      const nutrients = results[0];
      res.json({
        fruit,
        nutrients: {
          calories: nutrients.calories,
          carbohydrates: nutrients.carbohydrates,
          protein: nutrients.protein,
          fat: nutrients.fat,
          fiber: nutrients.fiber,
          vitaminC: nutrients.vitamin_c,
          calcium: nutrients.calcium,
          iron: nutrients.iron,
        },
      });
    });
  });

  pythonProcess.stderr.on("data", (data) => {
    console.error("Error from Python script:", data.toString());
    res.status(500).json({ error: "Internal server error" });
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

