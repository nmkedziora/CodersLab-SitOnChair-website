document.addEventListener("DOMContentLoaded", function (){


  ////// Zadanie 1 - Navigation menu //////
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

  ////// Zadanie 2 //////
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
// decided to use existing background-image property, because there is no animation on slider
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



////// Zadanie*- Order Section //////

  var orderForm = document.querySelector(".order form");

// left-hand side of the form
  var formSelects = document.querySelectorAll("form select");
  var transportCheckbox = document.querySelector("#if_transport");

// right-hand side of the form
  var tableRows = document.querySelectorAll("table tr");
  var orderButton = document.querySelector("#order_btn");

// cost variables
  var costs = {
    clair: 2400,
    margarita: 2000,
    selena: 1800,
    red: 100,
    black: 0,
    orange: 50,
    material: 0,
    leather: 250,
    transport: 200
  }

var orderSum = 0;


  transportCheckbox.addEventListener("click", function (event) {
    if (transportCheckbox.checked === true) {
      tableRows[4].children[0].innerHTML = "Transport";
      tableRows[4].children[1].innerHTML = costs.transport + "zł";
    }
  });

// chair type
  formSelects[0].addEventListener("change", function (event) {
    tableRows[0].children[0].innerHTML = this.value;
    tableRows[0].children[1].innerHTML = costs[this.value];
  });

// chair color
  formSelects[1].addEventListener("change", function (event) {
    tableRows[2].children[0].innerHTML = this.value;
    tableRows[2].children[1].innerHTML = costs[this.value];
  })

// chair fabric
  formSelects[2].addEventListener("change", function (event) {
    tableRows[3].children[0].innerHTML = this.value;
    tableRows[3].children[1].innerHTML = costs[this.value];
  })

  orderForm.addEventListener("submit", function (event) {
    event.preventDefault();
  });














}); // DOMContentLoaded
