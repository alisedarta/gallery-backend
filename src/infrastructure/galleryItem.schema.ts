import mongoose, { Schema, Document } from "mongoose";

export interface IGalleryItem extends Document {
  title: string;
  artistTitle: string;
  placeOfOrigin: string;
  dateDisplay: string;
  imageId: string;
}

const GalleryItemSchema = new Schema<IGalleryItem>(
  {
    title: { type: String, required: true },
    artistTitle: { type: String, required: true },
    placeOfOrigin: { type: String, required: true },
    dateDisplay: { type: String, required: true },
    imageId: { type: String, required: true },
  },
  { timestamps: true } // Adds createdAt & updatedAt fields, i dont know if i need them tbf
);

GalleryItemSchema.index({ title: "text", artistTitle: "text" });
export const GalleryItemModel = mongoose.model<IGalleryItem>(
  "GalleryItem",
  GalleryItemSchema,
  "galleryItems"
);
