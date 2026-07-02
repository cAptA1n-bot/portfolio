import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlen: 50,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      maxlen: 500,
      trim: true,
    },

    message: {
      type: String,
      required: true,
      maxlen: 1000,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Contact || mongoose.model("Contact", ContactSchema);