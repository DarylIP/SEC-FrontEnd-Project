// Hamburger Menu

let bar = document.getElementById("bar");
let nav = document.getElementById("navbar");
let close = document.getElementById("close");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

// Single Product Slider

let MainImg = document.getElementById("MainImg");
let SmallImg = document.getElementsByClassName("small-img");

SmallImg[0].onclick = function () {
  MainImg.src = SmallImg[0].src;
};
SmallImg[1].onclick = function () {
  MainImg.src = SmallImg[1].src;
};
SmallImg[2].onclick = function () {
  MainImg.src = SmallImg[2].src;
};
SmallImg[3].onclick = function () {
  MainImg.src = SmallImg[3].src;
};

// Directing to Single Product Page

// document.getElementById("nextpage").addEventListener("click", function () {
//   alert("click");
// });

// Pro.addEventListener("click", newpage);

// function newpage() {
//   event.preventDefault();
//   window.location.href = "sproduct.html";
// }

// Pro.addEventListener("click", () => {
//   window.location.href = "sproduct.html";
// });
