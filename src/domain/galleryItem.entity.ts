import { randomUUID } from "crypto";

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
}
