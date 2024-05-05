// Ví dụ hiệu ứng JavaScript đơn giản
// Thay đổi màu nền khi cuộn trang

window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
        document.body.style.backgroundColor = '#ccc';
    } else {
        document.body.style.backgroundColor = '#f0f0f0';
    }
});
const image = document.querySelector('.image');

image.addEventListener('mouseover', function() {
    image.style.top = '-5px'; /* Di chuyển ảnh lên 5px */
});

image.addEventListener('mouseout', function() {
    image.style.top = '0px'; /* Trả ảnh về vị trí mặc định */
});

///slider///
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slides li');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let activeSlide = 0;

prevBtn.addEventListener('click', function() {
    activeSlide--;
    if (activeSlide < 0) {
        activeSlide = slides.length - 1;
    }
    updateSlide();
});

nextBtn.addEventListener('click', function() {
    activeSlide++;
    if (activeSlide >= slides.length) {
        activeSlide = 0;
    }
    updateSlide();
});

function updateSlide() {
    slides.forEach(slide => slide.style.left = '100%');
    slides[activeSlide].style.left = '0';
}

