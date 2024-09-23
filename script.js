const asideEl = document.querySelector("aside");
const barsEl = document.querySelector(".fa-bars");
const closeEl = document.querySelector(".fa-x");
const body = document.body;

barsEl.addEventListener("click", () => {
  body.style.display = "grid";
  asideEl.style.display = "block";
});

closeEl.addEventListener("click", () => {
  body.style.display = "block";
  asideEl.style.display = "none";
});
