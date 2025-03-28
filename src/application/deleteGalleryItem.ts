import mongoose from "mongoose";
import { GalleryItemRepository } from "../infrastructure/galleryItem.repository";

export class DeleteGalleryItem {
  constructor(private repository: GalleryItemRepository) {}

  execute(id: string) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error("Invalid ID format");
    }
    const item = this.repository.findById(id);
    if (!item) {
      throw new Error("Item not found");
    }
    this.repository.delete(id);
    return item;
  }
}
