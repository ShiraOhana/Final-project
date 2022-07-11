import express from "express";
const app = express();

//middleware
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";

app.get("/", (req, res) => {
  throw new Error("Error");
  res.send("Welcome!");
});

// Looking for not existing routes
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

// Runing port
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
