// Navigation menu
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navigation.classList.toggle("active");
});

// Testimonials slider
const testimonialsContainer = document.querySelector(".testimonials-container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const username = document.querySelector(".username");
const role = document.querySelector(".role");

const testimonials = [
  {
    name: "John Doe",
    role: "CEO",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "I purchased a plot of land from Ishaan Garden and it was a great experience. The process was smooth and the team was very helpful."
  },
  {
    name: "Jane Smith",
    role: "Architect",
    image: "https://randomuser.me/api/portraits/women/67.jpg",
    text: "I have worked with Ishaan Garden on several projects and I am always impressed by their professionalism and dedication to their customers."
  },
  {
    name: "Bob Johnson",
    role: "Contractor",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    text: "I have been working with Ishaan Garden for several years now and I am always impressed by their quality of service and attention to detail."
  }
];

let idx = 1;

function updateTestimonial() {
  const { name, role, image, text } = testimonials[idx];

  testimonial.innerHTML = text;
  userImage.src = image;
  username.innerHTML = name;
  role.innerHTML = role;

  idx++;

  if (idx > testimonials.length - 1) {
    idx = 0;
  }
}

setInterval(updateTestimonial, 10000);

// Form validation
const form = document.querySelector(".contact-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const formSubmit = document.querySelector(".form-submit");

form.addEventListener("submit", e => {
  e.preventDefault();

  if (nameInput.value === "" || emailInput.value === "" || messageInput.value === "") {
    alert("Please fill out all fields");
  } else {
    form.submit();
  }
});

function dark()
{
  var dmode=document.querySelector('.toggle');
  var background=document.getElementsByClassName("toggle");
  background.backgroundColor = "white";
}


