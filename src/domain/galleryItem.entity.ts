import { randomUUID } from "crypto";

export class GalleryItem {
  constructor(
    public id: string = randomUUID(),
    public title: string,
    public artist_title: string,
    public place_of_origin: string,
    public date_display: string,
    public image_id: string
  ) {
    this.validate();
  }

  private validate() {
    if (
      !this.title ||
      !this.artist_title ||
      !this.place_of_origin ||
      !this.date_display ||
      !this.image_id
    ) {
      throw new Error("Cannot create GalleryItem with invalid body");
    }
  }

  static create(data: {
    title: string;
    artist_title: string;
    place_of_origin: string;
    date_display: string;
    image_id: string;
  }): GalleryItem {
    return new GalleryItem(
      undefined,
      data.title,
      data.artist_title,
      data.place_of_origin,
      data.date_display,
      data.image_id
    );
  }
}
