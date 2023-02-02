// Start Spinner
setTimeout(() => {
    const loader = document.querySelector('.loader');
      
    loader.style.display = 'none';
  }, 1000);

// End Spinner


// Start Scroll to Top
const scrollBtn = document.querySelector(".scroll-btn");

window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});
scrollBtn.addEventListener("click", () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
});
// End Scroll to Top
