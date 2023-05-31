import React, { useState } from "react";
import './review.css'
import axios from "axios";

function ReviewForm() {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value));  
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const id = window.sessionStorage.getItem("feedbackId");
    const uid = window.sessionStorage.getItem("user-id");
    axios
        .get("http://localhost/d-cart/backend/User/Review.php?id="+id+"&feedback="+feedback+"&uid="+uid+"&count="+rating)
        .then((response) => response.data)
        .then((data) => {
          window.location="/User/";
        });
  };

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <div className="rating">
        {[...Array(5)].map((_, i) => {
          const ratingValue = i + 1;
          return (
            <label key={i}>
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={handleRatingChange}
              />
              <span className={ratingValue <= rating ? "checked" : ""}>
                &#9733;
              </span>
            </label>
          );
        })}
      </div>
      <textarea
        placeholder="Write your feedback here..."
        value={feedback}
        onChange={handleFeedbackChange}
        required
      />
      <button type="submit">Submit Review</button>
    </form>
  );
}

export default ReviewForm;
