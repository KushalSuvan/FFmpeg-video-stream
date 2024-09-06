import mongoose, { Schema } from "mongoose";

const videoSchema = new Schema({
  videoName: {
    type: String,
    required: true,
    trim: true,
    index: true,
  },
  url: {
    type: String,
    required: true,
  },
});

export const Video = mongoose.model("Video", videoSchema);
