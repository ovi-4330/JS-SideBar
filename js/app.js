let giftBtn = document.querySelector("#giftBtn");
let overlay = document.querySelector("#overlay");
let closeBtn = document.querySelector("#closeBtn");

giftBtn.addEventListener("click", () => {
    overlay.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    overlay.classList.remove("active");
});

overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
        overlay.classList.remove("active");
    }
});


let productImage = document.querySelector("#productImage");
let prevBtn = document.querySelector("#prev");
let nextBtn = document.querySelector("#next");
let photoTitle = document.querySelector("#photoTitle");

let photos = [
  "./images/dont.avif",
  "./images/ideas.avif",
  "./images/keep.avif",
  "./images/great.avif"
];

let titles = [
  "You're Closer Than You Think.",
  "Think It. Code It. Make It Real.",
  "Progress Over Perfection.",
  "Small Steps. Big Dreams."
];

let index = 3; 

function showPhoto() {
  productImage.src = photos[index];
  photoTitle.textContent = titles[index];
}

nextBtn.addEventListener("click", function () {
  index = (index + 1) % photos.length;
  showPhoto();
});

prevBtn.addEventListener("click", function () {
  index = (index - 1 + photos.length) % photos.length;
  showPhoto();
});

showPhoto();

let cursor = document.querySelector('.cursor')
let cursorSm = document.querySelector('.cursor-follower')

window.addEventListener('mousemove', (e)=>{
    let left = e.clientX
    let top = e.clientY

    cursor.style.top = top + 'px';
    cursor.style.left = left + 'px';
    cursorSm.style.top = top + 'px';
    cursorSm.style.left = left + 'px';

})