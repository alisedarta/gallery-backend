import { CreateGalleryItemDTO } from "../api/createGalleryItem.dto";
import { GalleryItem } from "../domain/galleryItem.entity";
import { GalleryItemModel, IGalleryItem } from "./galleryItem.schema";

export class GalleryItemRepository {
  async create(item: GalleryItem): Promise<IGalleryItem> {
    const newItem = new GalleryItemModel(item);
    await newItem.save();
    return newItem;
  }

  async getAll(): Promise<IGalleryItem[]> {
    return await GalleryItemModel.find();
  }

  async delete(id: string): Promise<void | null> {
    return await GalleryItemModel.findByIdAndDelete(id);
  }

  async update(
    id: string,
    data: CreateGalleryItemDTO
  ): Promise<IGalleryItem | null> {
    return await GalleryItemModel.findByIdAndUpdate(id, data, { new: true });
  }

  async findById(id: string): Promise<IGalleryItem | null> {
    return await GalleryItemModel.findById(id);
  }
}
