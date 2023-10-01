// JavaScript for the Luxury Fashion E-Commerce Landing Page

// Sample data for reviews (replace with actual data)
const reviewsData = [
    { name: "Customer 1", rating: 4, comment: "Great product!" },
    { name: "Customer 2", rating: 5, comment: "Amazing quality!" },
    // Add more reviews here
];

// Function to calculate the average rating
function calculateAverageRating(reviews) {
    const totalRatings = reviews.reduce((sum, review) => sum + review.rating, 0);
    return (totalRatings / reviews.length).toFixed(1);
}

// Function to display reviews
function displayReviews(reviews) {
    const reviewsContainer = document.getElementById("reviews-container");

    // Clear previous reviews
    reviewsContainer.innerHTML = "";

    // Display reviews
    reviews.forEach((review) => {
        const reviewItem = document.createElement("div");
        reviewItem.classList.add("review-item");
        reviewItem.innerHTML = `
            <h4>${review.name}</h4>
            <p>Rating: ${review.rating}</p>
            <p>${review.comment}</p>
        `;
        reviewsContainer.appendChild(reviewItem);
    });

    // Calculate and display average rating
    const averageRating = calculateAverageRating(reviews);
    const averageRatingElement = document.getElementById("average-rating");
    averageRatingElement.textContent = `Average Rating: ${averageRating}`;
}

// Toggle review form
function toggleReviewForm() {
    const reviewForm = document.getElementById("review-form");
    reviewForm.classList.toggle("hidden");
}

// Event listener for the "Add Review" button
const addReviewButton = document.getElementById("add-review-button");
addReviewButton.addEventListener("click", toggleReviewForm);

// Event listener for submitting a review
const submitReviewButton = document.getElementById("submit-review-button");
submitReviewButton.addEventListener("click", function () {
    const nameInput = document.getElementById("review-name");
    const ratingInput = document.getElementById("review-rating");
    const commentInput = document.getElementById("review-comment");

    const name = nameInput.value;
    const rating = parseInt(ratingInput.value);
    const comment = commentInput.value;

    // Add the new review to the data
    reviewsData.push({ name, rating, comment });

    // Display reviews with the new one
    displayReviews(reviewsData);

    // Clear input fields
    nameInput.value = "";
    ratingInput.value = "";
    commentInput.value = "";

    // Hide the review form
    toggleReviewForm();
});

// Initial display of reviews
displayReviews(reviewsData);
