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

  delete(id: string): void {
    this.galleryItems = this.galleryItems.filter((item) => item.id !== id);
  }

  //TODO: When switching to mongoDB i need to persist updated values from PUT requests
}
