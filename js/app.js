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

});
