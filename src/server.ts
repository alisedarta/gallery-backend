import express from "express";
import router from "./api/galleryItem.controller";
import cors from "cors";
import { connectDB } from "./infrastructure/db";

const app = express();
connectDB();
const PORT = 3000;
app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://alises-virtual-gallery.netlify.app",
    ],
  })
);
app.get("/health", (req, res) => {
  res.status(200).json({ message: "Server is healthy" });
});
app.use("/galleryItem", router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
