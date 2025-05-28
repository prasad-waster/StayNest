const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review");
const wrapAsync = require("../utils/wrapAsync");

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    url: String,
    filename: String,
  },
  price: Number,
  location: String,
  country: String,
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  category: String,
});

listingSchema.post(
  "findOneAndDelete",
  wrapAsync(async (req, res) => {
    await Review.deleteMany({ _id: { $in: listing.reviews } });
  })
);

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
