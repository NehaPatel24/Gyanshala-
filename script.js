var menuBtn = document.querySelector('.menu-btn');
var mainList = document.querySelector('.main-list');
var menuItems = mainList.querySelectorAll('li a'); 


menuBtn.addEventListener('click', function() {
    mainList.classList.toggle('active');
});

function menuItemsClicked() {
    
    mainList.classList.remove('active');
}


for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', menuItemsClicked);
}

// img
const images = document.querySelectorAll(".photo img");
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.getElementById("closeModal");
const viewAllBtn = document.getElementById("viewAllBtn");
const hiddenPhotos = document.querySelectorAll(".hidden");

// Open the modal when an image is clicked
images.forEach(image => {
    image.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImage.src = image.src;
        modalImage.alt = image.alt;
    });
});


closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});


modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// Show hidden photos and hide the "View All" button
viewAllBtn.addEventListener("click", () => {
    hiddenPhotos.forEach(photo => {
        photo.classList.remove("hidden");
        photo.classList.add("visible");
    });

    viewAllBtn.style.display = "none";
});


// achivment 
const slides = document.querySelector('.slides');
    const slideElements = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    
    let index = 0;
    const totalSlides = slideElements.length;

    function showSlide(newIndex) {
      if (newIndex >= totalSlides) index = 0; 
      else if (newIndex < 0) index = totalSlides - 1; 
      else index = newIndex;

      slides.style.transform = `translateX(-${index * 100}%)`;

      dots.forEach(dot => dot.classList.remove('active'));
      dots[index].classList.add('active');
    }

    prevBtn.addEventListener('click', () => showSlide(index - 1));
    nextBtn.addEventListener('click', () => showSlide(index + 1));

    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        const slideIndex = parseInt(dot.getAttribute('data-index'));
        showSlide(slideIndex);
      });
    });

    setInterval(() => showSlide(index + 1), 9000);
