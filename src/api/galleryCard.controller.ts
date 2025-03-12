import express, { NextFunction, Request, Response } from "express";
import { GalleryItemRepository } from "../infrastructure/galleryItem.repository";
import { CreateGalleryItem } from "../application/galleryItem.create";

const router = express.Router();
const repository = new GalleryItemRepository();
const createGalleryItem = new CreateGalleryItem(repository);

export interface CreateGalleryItemDTO {
  title: string;
  artist_title: string;
  place_of_origin: string;
  date_display: string;
  image_id: string;
}

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
