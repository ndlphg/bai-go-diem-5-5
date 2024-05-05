var images = document.querySelectorAll('.image img');
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
var close = document.querySelector('.close');
var galleryImg = document.querySelector('.gallery_inner img');
var gallery = document.querySelector('.gallery');

var currentIndex = 0;
var isAutoplayActive = true; // Flag for autoplay toggle

function showGallery() {
  if (currentIndex === 0) {
    prev.classList.add('hide');
  } else {
    prev.classList.remove('hide');
  }

  if (currentIndex === images.length - 1) {
    next.classList.add('hide');
  } else {
    next.classList.remove('hide');
  }

  galleryImg.src = images[currentIndex].src;
}

images.forEach((item, index) => {
  item.addEventListener('click', function () {
    currentIndex = index;
    showGallery();
  });

  // Add hover effect for enlargement
  item.addEventListener('mouseover', function () {
    item.classList.add('enlarged');
  });

  item.addEventListener('mouseout', function () {
    item.classList.remove('enlarged');
  });
});

close.addEventListener('click', function () {
  gallery.classList.remove('show');
});

document.addEventListener('keydown', function (event) {
  if (event.keyCode === 27) {
    gallery.classList.remove('show');
  }
});

prev.addEventListener('click', function () {
  if (currentIndex > 0) {
    currentIndex--;
    showGallery();
  }
});

next.addEventListener('click', function () {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    showGallery();
  }
});

// Autoplay functionality
function autoplay() {
  if (isAutoplayActive) {
    currentIndex++;
    if (currentIndex === images.length) {
      currentIndex = 0;
    }
    showGallery();
  }
}

// Start autoplay with a delay (optional)
setTimeout(autoplay, 3000); // Start autoplay after 3 seconds

// Add a toggle button (optional)
var autoplayToggle = document.createElement('button');
autoplayToggle.textContent = 'Toggle Autoplay';
autoplayToggle.addEventListener('click', function () {
  isAutoplayActive = !isAutoplayActive;
  if (!isAutoplayActive) {
    clearTimeout(autoplayInterval); // Clear existing interval
  } else {
    autoplayInterval = setInterval(autoplay, 3000); // Restart autoplay
  }
});
document.body.appendChild(autoplayToggle);
