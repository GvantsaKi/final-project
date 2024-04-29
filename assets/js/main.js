const autoProgressBar = document.querySelector(".autoProgressBar");
const Design = document.getElementById("Design");
const Photography = document.getElementById("Photography");
const Marking = document.getElementById("Marking");
const Photoshop = document.getElementById("Photoshop");

window.addEventListener("scroll", () => {
  if (autoProgressBar.getBoundingClientRect().top <= 500) {
    Design.style.width = 80 + "%";
    Photography.style.width = 50 + "%";
    Marking.style.width = 65 + "%";
    Photoshop.style.width = 30 + "%";
  }
});










// const startTimeout = document.querySelector(".startTimeout");
// const stopTimeout = document.querySelector(".stopTimeout");
// const startInterval = document.querySelector(".startInterval");
// const stopInterval = document.querySelector(".stopInterval");

// let timeoutId = null;
// let intervalId = null;



// const slides = document.querySelectorAll(".slide");
// const nextBtn = document.querySelector(".next");
// const prevBtn = document.querySelector(".prev");
// const slidesWrapper = document.querySelector(".slides-wrapper");

// const startAutoSlides = document.querySelector(".start-slide");
// const stopAutoSlides = document.querySelector(".stop-slide");

// let currentSlide = 0;

// function loadSlides() {
// 	slides.forEach((slide, index) => {
// 		if (index === currentSlide) {
// 			slide.classList.add("active");
// 		} else {
// 			slide.classList.remove("active");
// 		}
// 	});
// }

// function goToNextSlide() {
// 	if (currentSlide === slides.length - 1) {
// 		currentSlide = 0;
// 	} else {
// 		currentSlide += 1;
// 	}
// 	loadSlides();
// }

// function goToPrevSlide() {
// 	if (currentSlide === 0) {
// 		currentSlide = slides.length - 1;
// 	} else {
// 		currentSlide -= 1;
// 	}
// 	loadSlides();
// }

// loadSlides();


// let sliderIntervalId = null;

// sliderIntervalId = setInterval(goToNextSlide, 5000);


// slidesWrapper.addEventListener("mouseenter", () => {
// 	 console.log("mouse enter");
// });

// slidesWrapper.addEventListener("mouseleave", () => {
// 	 console.log("mouse leave");
// });


// document.querySelector(".slides-wrapper").onmouseenter = function() {mouseEnter()};
// document.querySelector(".slides-wrapper").onmouseleave = function() {mouseLeave()};


// function mouseEnter() {
//   document.getElementById("demo").style.color = "red";
// }

// function mouseLeave() {
//   document.getElementById("demo").style.color = "black";
// }
