import express, { NextFunction, Request, Response } from "express";
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

router.get("/", (req, res) => {
  res.status(200).json(repository.getAll());
});

// amazonq-ignore-next-line
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  try {
    const deletedItem = deleteGalleryItem.execute(id);
    res.status(200).json(deletedItem);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
});

// amazonq-ignore-next-line
router.put("/:id", (req, res) => {
  const id = req.params.id;
  try {
    const updatedGalleryItem = updateGalleryItem.execute(id, req.body);
    res.status(201).json(updatedGalleryItem);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
});

export default router;
