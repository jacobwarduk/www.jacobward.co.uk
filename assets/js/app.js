window.onload = function() {
  // var spinner = document.querySelector(".loading");
  // spinner.style.display = "none";

  // var body = document.querySelector(".header");
  // body.style.visibility = "visible";


  var blocks = document.querySelectorAll(".section__block");


  function openBlock(location) {
    Array.prototype.forEach.call(blocks, function(block) {
      block.style.display = "none";
      document.querySelector("#" + location).style.display = "block";
      document.querySelector("#menu").classList.add("close");
      document.querySelector("#menu").classList.remove("open");
      window.location.href = "#" + location;
    });
  }

  if (window.location.hash) {
    openBlock(window.location.hash.substr(1));
  }



  // Hamburger menu
  document.querySelector("#hamburger").addEventListener("click", function(e) {
    document.querySelector("#menu").classList.toggle("open");
    document.querySelector("#menu").classList.toggle("close");
  });

  document.querySelector("#publications-btn").addEventListener("click", function(e) {
    openBlock("publications");
  });


  document.querySelector("#about-btn").addEventListener("click", function(e) {
    openBlock("about");
  });


  document.querySelector("#work-btn").addEventListener("click", function(e) {
    openBlock("work");
  });


  document.querySelector("#posts-btn").addEventListener("click", function(e) {
    openBlock("posts");
  });


  document.querySelector("#calendar-btn").addEventListener("click", function(e) {
    openBlock("calendar");
  });


  document.querySelector("#contact-btn").addEventListener("click", function(e) {
    openBlock("contact");
  });


}
