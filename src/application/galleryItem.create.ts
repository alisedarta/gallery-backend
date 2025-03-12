import { CreateGalleryItemDTO } from "../api/galleryCard.controller";
import { GalleryItem } from "../domain/galleryItem.entity";
import { GalleryItemRepository } from "../infrastructure/galleryItem.repository";

export class CreateGalleryItem {
  constructor(private repository: GalleryItemRepository) {}

  execute(data: CreateGalleryItemDTO): GalleryItem {
    const newGalleryItem = GalleryItem.create(data);

    this.repository.create(newGalleryItem);
    return newGalleryItem;
  }
}
