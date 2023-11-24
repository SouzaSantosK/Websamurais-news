let slides = document.querySelectorAll('.slide');
let balls = document.querySelectorAll('.ball');

function showSlide(index) {
  slides.forEach((slide) => {
    slide.classList.remove('active-slide');
  });
  slides[index].classList.add('active-slide');
}

function showBall(index) {
  balls.forEach((ball) => {
    ball.classList.remove('active-ball');
  });
  balls[index].classList.add('active-ball');
}

function changeSlide(index) {
  showSlide(index);
  showBall(index);
}

changeSlide(0);
