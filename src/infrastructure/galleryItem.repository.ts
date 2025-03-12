import { GalleryItem } from "../domain/galleryItem.entity";

export class GalleryItemRepository {
  private galleryItems: GalleryItem[] = [];

  create(item: GalleryItem): GalleryItem {
    this.galleryItems.push(item);
    return item;
  }

  getAll(): GalleryItem[] {
    return this.galleryItems;
  }
}
