import { CreateGalleryItemDTO } from "../api/createGalleryItem.dto";
import { GalleryItem } from "../domain/galleryItem.entity";
import { GalleryItemRepository } from "../infrastructure/galleryItem.repository";

export class UpdateGalleryItem {
  constructor(private repository: GalleryItemRepository) {}

  execute(id: string, data: CreateGalleryItemDTO): GalleryItem {
    const item = this.repository.getAll().find((item) => item.id === id);
    if (!item) {
      throw new Error("Item not found");
    }

    item.update(data);

    return item;
  }
}
