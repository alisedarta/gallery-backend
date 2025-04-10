import express from "express";
import { GalleryItemRepository } from "../infrastructure/galleryItem.repository";
import { CreateGalleryItem } from "../application/createGalleryItem";
import { DeleteGalleryItem } from "../application/deleteGalleryItem";
import { UpdateGalleryItem } from "../application/updateGalleryItem";

const router = express.Router();
const repository = new GalleryItemRepository();
const createGalleryItem = new CreateGalleryItem(repository);
const deleteGalleryItem = new DeleteGalleryItem(repository);
const updateGalleryItem = new UpdateGalleryItem(repository);

// amazonq-ignore-next-line
router.post("/", (req, res) => {
  try {
    const newGalleryItem = createGalleryItem.execute(req.body);
    res.status(201).json(newGalleryItem);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  const limit = req.query.limit
    ? parseInt(req.query.limit as string)
    : undefined;
  if (limit && (isNaN(limit) || limit < 0)) {
    res.status(400).json({
      message:
        "Invalid 'limit' query parameter. Must be a non-negative integer.",
    });
  } else {
    try {
      const galleryItems = await repository.getAll(limit);
      res.status(200).json(galleryItems);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
});

// amazonq-ignore-next-line
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const deletedItem = await deleteGalleryItem.execute(id);
    res.status(200).json(deletedItem);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
});

// amazonq-ignore-next-line
router.put("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const updatedGalleryItem = await updateGalleryItem.execute(id, req.body);
    res.status(201).json(updatedGalleryItem);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
});

export default router;
