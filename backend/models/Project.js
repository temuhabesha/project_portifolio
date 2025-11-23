const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    developerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: String,
    description: String,
    price: Number,
    screenshots: [String],
  },
  { timestamps: true }
);


module.exports = mongoose.model("Project", projectSchema);
