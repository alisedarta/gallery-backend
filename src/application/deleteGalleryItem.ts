import { GalleryItemRepository } from "../infrastructure/galleryItem.repository";

export class DeleteGalleryItem {
  constructor(private repository: GalleryItemRepository) {}

  execute(id: string) {
    const item = this.repository.getAll().find((item) => item.id === id);
    if (!item) {
      throw new Error("Item not found");
    }
    this.repository.delete(id);
    return item;
  }
}
