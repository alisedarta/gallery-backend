import express, { NextFunction, Request, Response } from "express";
import { GalleryItemRepository } from "../infrastructure/galleryItem.repository";
import { CreateGalleryItem } from "../application/createGalleryItem";

const router = express.Router();
const repository = new GalleryItemRepository();
const createGalleryItem = new CreateGalleryItem(repository);

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

export default router;
