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

const sendBtn = document.getElementById("sendMessage");
const closeBtn = document.getElementById('close');

sendBtn.addEventListener("click", () => {
  sendMessage();
});

closeBtn.addEventListener("click", () => {
  document.querySelector('.modal').style.display = 'none'
});

function sendMessage() {

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "https://borjomi.loremipsum.ge/api/send-message", true);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.onload = function () {
    const result = JSON.parse(this.responseText);

    if(result.status === 1) {
      document.querySelector('.modal').style.display = 'block'
    }
  };
  xhr.send(JSON.stringify({
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    website: document.getElementById('url').value,
    message: document.getElementById('message').value
  }));
}
















function initFilterProjects() {
  const filters = document.querySelectorAll(".bar-li");
  const projects = document.querySelectorAll(".project");

  projects.forEach((project) => {
    project.style.display = "block";
  });

  filters.forEach((filter) => {
    filter.addEventListener("click", () => {
      const name = filter.dataset.name;

      if (name === "all") {
        projects.forEach((project) => {
          project.style.display = "block";
        });
      } else {
        projects.forEach((project) => {
          project.style.display = "none";
        });
        const currentProject = Array.from(projects).find(
          (project) => project.dataset.name === name
        );

        currentProject.style.display = "block";
      }
    });
  });
}