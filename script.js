const mediaModal = document.getElementById("mediaModal");
const closeBtn = document.querySelector(".close-btn");
const sliderImage = document.getElementById("sliderImage");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let mediaFiles = [];
let currentIndex = 0;

function openModal(files) {
    console.log('Modal triggered with files:', files);
    mediaFiles = files; 
    currentIndex = 0; 
    updateSlider();
    mediaModal.style.display = "flex"; 
}


closeBtn.addEventListener("click", () => {
    mediaModal.style.display = "none";
});

function updateSlider() {
    sliderImage.src = mediaFiles[currentIndex];
}

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + mediaFiles.length) % mediaFiles.length;
    updateSlider();
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % mediaFiles.length;
    updateSlider();
});

mediaModal.addEventListener("click", (e) => {
    if (e.target === mediaModal) {
        mediaModal.style.display = "none";
    }
});