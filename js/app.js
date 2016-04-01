document.addEventListener("DOMContentLoaded", function (){


  ////// Zadanie 1 - Menu górne //////
  var listItems = document.querySelectorAll(".header__nav > ul > li");


  for (var i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("mouseover", function (event) {
      if (this.children.length > 0) {
        this.children[0].style.display = "block";
      }
    });

    listItems[i].addEventListener("mouseout", function (event) {
      if (this.children.length > 0) {
        this.children[0].style.display = "none";
      }
    });
  } //for

  ////// Zadanie 2 - Chowanie bloku z nazwą dla dwóch bloków z obrazkami //////
  var infoImages = document.querySelectorAll(".info__image");

  for (var i = 0; i < infoImages.length; i++) {
    infoImages[i].addEventListener("mouseover", function (event) {
      this.children[0].style.display = "none";
    });

    infoImages[i].addEventListener("mouseout", function (event) {
      this.children[0].removeAttribute("style");
    });
  }

////// Zadanie 3 - Slider //////
// Zdecydowałam się na pracę na background-image, ponieważ nie ma animacji do slidera
  var currentImage = document.querySelector(".hero__image");
  var prevImage = document.querySelector(".arrow_left");
  var nextImage = document.querySelector(".arrow_right");

  var visibleBackgroundIndex = 0;
  var backgrounds = [
    "url('./images/black_chair.png')",
    "url('./images/red.png')",
    "url('./images/orange.png')"
  ];


  prevImage.addEventListener("click", function (event) {
    visibleBackgroundIndex--;

    if (visibleBackgroundIndex < 0) {
      visibleBackgroundIndex = backgrounds.length - 1;
    }
    currentImage.style.backgroundImage = backgrounds[visibleBackgroundIndex];
  });

  nextImage.addEventListener("click", function (event) {
    visibleBackgroundIndex++;

    if (visibleBackgroundIndex >= listItems.length) {
      visibleBackgroundIndex = 0;
    }
    currentImage.style.backgroundImage = backgrounds[visibleBackgroundIndex];
  });
}); // DOMContentLoaded
