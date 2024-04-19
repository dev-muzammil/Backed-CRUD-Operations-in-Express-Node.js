import express from "express";
const app = express();
import router from "./router.js";
import { connectDb } from "./db.js";
import cors from "cors"
app.use(express.json());

app.use(cors())
app.use(router);

connectDb().then(() => {
  const PORT = 5000;
  app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
  });
});
