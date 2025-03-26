import express from "express";
import router from "./api/galleryItem.controller";

const app = express();
const PORT = 3000;
app.use(express.json());
app.get("/health", (req, res) => {
  res.status(200).json({ message: "Server is healthy" });
});
app.use("/galleryItem", router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
