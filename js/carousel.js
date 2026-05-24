const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg'
];

let currentIndex = 0;

function showImage(index) {
    const carouselImage = document.getElementById('carousel-image');
    carouselImage.src = images[index];
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

document.addEventListener('DOMContentLoaded', () => {
    showImage(currentIndex);
    document.getElementById('next-button').addEventListener('click', nextImage);
    document.getElementById('prev-button').addEventListener('click', prevImage);
    
    setInterval(nextImage, 3000); // Change image every 3 seconds
});