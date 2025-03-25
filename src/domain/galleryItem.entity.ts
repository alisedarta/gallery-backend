import { randomUUID } from "crypto";
import { CreateGalleryItemDTO } from "../api/createGalleryItem.dto";

export class GalleryItem {
  constructor(
    public id: string = randomUUID(),
    public title: string,
    public artistTitle: string,
    public placeOfOrigin: string,
    public dateDisplay: string,
    public imageId: string
  ) {
    this.validate();
  }

  private validate() {
    if (
      !this.title ||
      !this.artistTitle ||
      !this.placeOfOrigin ||
      !this.dateDisplay ||
      !this.imageId
    ) {
      throw new Error("Cannot create GalleryItem with invalid body");
    }
  }

  static create(data: {
    title: string;
    artistTitle: string;
    placeOfOrigin: string;
    dateDisplay: string;
    imageId: string;
  }): GalleryItem {
    return new GalleryItem(
      undefined,
      data.title,
      data.artistTitle,
      data.placeOfOrigin,
      data.dateDisplay,
      data.imageId
    );
  }

  update(data: CreateGalleryItemDTO) {
    if (
      !data.title ||
      !data.artistTitle ||
      !data.placeOfOrigin ||
      !data.dateDisplay ||
      !data.imageId
    ) {
      throw new Error("All fields are required for update");
    }

    this.title = data.title;
    this.artistTitle = data.artistTitle;
    this.placeOfOrigin = data.placeOfOrigin;
    this.dateDisplay = data.dateDisplay;
    this.imageId = data.imageId;
  }
}
