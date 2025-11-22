const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    developerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    imageBase64: { type: String }, // store single screenshot as base64
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);
