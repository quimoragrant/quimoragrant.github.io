let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName('image__container');

    // Hide all images
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    // Show curr image
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = 'block';

    // Repeat after 2 sec (2000ms)
    setTimeout(showSlides, 3000);
}