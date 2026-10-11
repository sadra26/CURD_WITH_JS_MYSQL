import express from "express";
import cors from "cors";
import db from "./backend/connection.js";
const port = 5000;
import response from "./backend/response.js";

const app = express();
app.use(cors());
app.use(express.json());

// app.get("/aboutUs", (req, res) => {
//   const endpoint = req.query.id;

//   const myQuery = "SELECT antrian FROM customers WHERE id =" + endpoint;

//   db.query(myQuery, (err, results) => {
//     if (err) {
//       console.error(err);
//       return res.status(500).send("Database error");
//     }

//     if (results.length === 0) {
//       return res.status(404).send("Data tidak ditemukan");
//     }

//     res.send(results[0]); // karena hanya 1 data
//   });
// });

app.get("/get", (req, res) => {
  const myQuery = "SELECT * FROM customers";
  db.query(myQuery, (err, results) => {
    response(200, results, "ini message", res);
    console.log(results);
  });
});

app.listen(port, () => {
  console.log("server is running on port " + port);
});
