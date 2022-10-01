const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
  {
    shortlink : {
      type: String,
      required: [true, "Please add shortLink name"],
    },
    description : {
      type: String,
    },
    url: {
      type: String,
      select: false
    },
    tags : {
        type: mongoose.Schema.Types.Array,
    },
    author: 
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model("Shortcuts", UserSchema);
