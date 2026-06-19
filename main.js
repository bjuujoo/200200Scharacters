/* =========================
CAROUSEL
========================= */
const carousel = document.getElementById('carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;
const totalSlides = 3;

if (nextBtn && carousel) {
    nextBtn.addEventListener('click', () => {
        if (currentIndex < totalSlides - 1) {
            currentIndex++;
            // 300% 너비 안에서 한 칸(1/3)씩 이동하려면 33.3333%가 맞습니다.
            carousel.style.transform = `translateX(-${currentIndex * 33.3333}%)`;
        }
    });
}

if (prevBtn && carousel) {
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            carousel.style.transform = `translateX(-${currentIndex * 33.3333}%)`;
        }
    });


/* =========================
HAMBURGER
========================= */
const hamburgerBtn = document.getElementById("hamburgerBtn");
const dropdownMenu = document.getElementById("dropdownMenu");

hamburgerBtn.addEventListener("click", function(e){
    e.stopPropagation();
    dropdownMenu.classList.toggle("active");
});

document.addEventListener("click", function(){
    dropdownMenu.classList.remove("active");
});