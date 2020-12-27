const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const userRoutes = require("./routers");

const app = express();
app.use(morgan("dev"));

app.use(bodyParser.json());
app.use("/users", userRoutes);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
   res.send("<h3>Hello from express</h3>");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
   console.log(`server is running at ${PORT}`);
});
