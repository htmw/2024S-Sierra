const request = require("supertest");
const { spawn } = require("child_process");
const app = require("./app");

jest.mock("mysql", () => ({
 createConnection: jest.fn().mockReturnValue({
   connect: jest.fn().mockImplementation((callback) => callback()),
   query: jest.fn().mockImplementation((query, values, callback) => {
     if (query.includes("SELECT * FROM fruit_nutrients")) {
       if (values[0] === "apple") {
         callback(null, [
           {
             fruit: "apple",
             calories: 95,
             carbohydrates: 25,
             protein: 0.5,
             fat: 0.3,
             fiber: 4.4,
             vitamin_c: 4.6,
             calcium: 6,
             iron: 0.17,
           },
         ]);
       } else {
         callback(null, []);
       }
     } else {
       callback(new Error("Unexpected SQL query"));
     }
   }),
 }),
}));

jest.mock("child_process", () => ({
 spawn: jest.fn().mockReturnValue({
   stdout: {
     on: jest.fn().mockImplementation((event, callback) => {
       if (event === "data") {
         callback("apple");
       }
     }),
   },
   stderr: {
     on: jest.fn(),
   },
 }),
}));

describe("POST /predict", () => {
 it("should predict the fruit and return its nutrients", async () => {
   const response = await request(app)
     .post("/predict")
     .attach("image", "path/to/apple.jpg");

   expect(response.status).toBe(200);
   expect(response.body).toEqual({
     fruit: "apple",
     nutrients: {
       calories: 95,
       carbohydrates: 25,
       protein: 0.5,
       fat: 0.3,
       fiber: 4.4,
       vitaminC: 4.6,
       calcium: 6,
       iron: 0.17,
     },
   });
 });

 it("should return an error if no image file is uploaded", async () => {
   const response = await request(app).post("/predict");

   expect(response.status).toBe(400);
   expect(response.body).toEqual({ error: "No image file uploaded" });
 });

 it("should return an error if the predicted fruit is not found in the database", async () => {
   spawn.mockReturnValue({
     stdout: {
       on: jest.fn().mockImplementation((event, callback) => {
         if (event === "data") {
           callback("unknown");
         }
       }),
     },
     stderr: {
       on: jest.fn(),
     },
   });

   const response = await request(app)
     .post("/predict")
     .attach("image", "path/to/unknown.jpg");

   expect(response.status).toBe(404);
   expect(response.body).toEqual({ error: "Fruit not found in the database" });
 });
});
