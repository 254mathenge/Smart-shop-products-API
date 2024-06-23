import express from "express";
import router from "./routes/products.routes.js"
const app = express();
app.use(express.json());
app.use("/products", router);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
