import { CreateGalleryItemDTO } from "../api/createGalleryItem.dto";
import { GalleryItem } from "../domain/galleryItem.entity";
import { GalleryItemModel, IGalleryItem } from "./galleryItem.schema";

export class GalleryItemRepository {
  async create(item: GalleryItem): Promise<IGalleryItem> {
    const newItem = new GalleryItemModel(item);
    await newItem.save();
    return newItem;
  }

  async getAll(limit?: number, filters?: any): Promise<IGalleryItem[]> {
    let query: any = {};
    if (filters) {
      if (filters.is_on_view) query.isOnView = true;
      if (filters.is_public_domain) query.isPublicDomain = true;
      if (filters.has_not_been_viewed_much) query.hasNotBeenViewedMuch = true;
      if (filters.searchTerm) {
        query.$or = [
          { title: { $regex: filters.searchTerm, $options: "i" } },
          { artistTitle: { $regex: filters.searchTerm, $options: "i" } },
        ];
      }
    }
    const items = await GalleryItemModel.find(query).limit(limit || 0);
    return items;
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
