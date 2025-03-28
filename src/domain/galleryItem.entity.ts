export class GalleryItem {
  constructor(
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
      data.title,
      data.artistTitle,
      data.placeOfOrigin,
      data.dateDisplay,
      data.imageId
    );
  }
}
