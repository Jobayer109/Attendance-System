const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const obj = {
    name: "Jobayer Ahmed",
    email: "jobayer@gmail.com",
    city: "Gaibandha",
    Division: "Rangpur",
    Country: "Bangladesh",
  };
  res.json(obj);
});

app.listen(8080, () => {
  console.log(`Server is running on port: 4000`);
});
