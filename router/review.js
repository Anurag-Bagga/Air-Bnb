const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../util/wrapAsync.js");
const expressError = require("../util/expressError.js");
const {listingSchema, reviewSchema} = require("../schema.js");
const Listing = require("../models/listing.js");
const review = require("../models/review.js");
const {validatereview,isLoggedIn,isReviewAuthor} = require("../middleware.js") 

const reviewController = require("../controller/review.js");

//post review route
router.post("/",isLoggedIn,validatereview,wrapAsync(reviewController.postReview));

//delete review route
router.delete("/:reviewId",isLoggedIn,isReviewAuthor,wrapAsync(reviewController.destroyReview));

module.exports = router;