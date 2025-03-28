import mongoose from "mongoose";
import { CreateGalleryItemDTO } from "../api/createGalleryItem.dto";
import { GalleryItem } from "../domain/galleryItem.entity";
import { GalleryItemRepository } from "../infrastructure/galleryItem.repository";

export class UpdateGalleryItem {
  constructor(private repository: GalleryItemRepository) {}

  async execute(id: string, data: CreateGalleryItemDTO) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error("Invalid ID format");
    }
    const item = await this.repository.findById(id);
    if (!item) {
      throw new Error("Item not found");
    }

    return this.repository.update(id, data);
  }
}
