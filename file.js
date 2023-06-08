const carouselItems = document.querySelectorAll('.carousel__item');
let currentItem = 0;

function showNextItem() {
  carouselItems[currentItem].classList.remove('active');
  currentItem = (currentItem + 1) % carouselItems.length;
  carouselItems[currentItem].classList.add('active');
  console.log('Current item:', currentItem);
}

setInterval(showNextItem, 3000); // Change slide every 3 seconds

