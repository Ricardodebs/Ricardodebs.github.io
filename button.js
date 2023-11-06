window.addEventListener("scroll", function() {
    var button = document.getElementById("scrollToTop");
  
    if ('window.pageYOffset > 100') {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
  
  document.getElementById("scrollToTop").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  