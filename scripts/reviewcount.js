const reviewCount = document.querySelector("#reviewNumber");
numberOfReviews = '1';

if (localStorage.getItem('reviews') != null) {
    numberOfReviews = localStorage.getItem('reviews');
    console.log(numberOfReviews);
    numberOfReviews++;
    localStorage.setItem('reviews', numberOfReviews);
    reviewCount.innerHTML = `${numberOfReviews} products.`;
}
else {
    localStorage.setItem('reviews', numberOfReviews);
    reviewCount.innerHTML = `${numberOfReviews} product.`;
}

