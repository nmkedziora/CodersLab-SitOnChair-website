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

// total cost, that is being inserted into SUMA field
  var totalCost = {
    type: 0,
    color: 0,
    fabric: 0,
    transport: 0
  }



// chair type
  formSelects[0].addEventListener("change", function (event) {
    tableRows[0].children[0].innerHTML = this.value;         // takes chair type value from select
    tableRows[0].children[1].innerHTML = costs[this.value];  // updates chair type cost in form using costs object
    totalCost.type = costs[this.value];                      // updates type cost in totalCost object using chosen type value from costs object
    tableRows[1].children[1].innerHTML = orderSum();         // puts current sum into SUMA row
  });

// chair color
  formSelects[1].addEventListener("change", function (event) {
    tableRows[2].children[0].innerHTML = this.value;
    tableRows[2].children[1].innerHTML = costs[this.value];
    totalCost.color = costs[this.value];
    tableRows[1].children[1].innerHTML = orderSum();
  })

// chair fabric
  formSelects[2].addEventListener("change", function (event) {
    tableRows[3].children[0].innerHTML = this.value;
    tableRows[3].children[1].innerHTML = costs[this.value];
    totalCost.fabric = costs[this.value];
    tableRows[1].children[1].innerHTML = orderSum();
  })

// checkbox
  transportCheckbox.addEventListener("click", function (event) {
    if (transportCheckbox.checked === true) {                 // if checkbox is checked
      tableRows[4].children[0].innerHTML = "Transport";       // puts "Transport" text into transport row
      tableRows[4].children[1].innerHTML = costs.transport;   // puts transport value from costs object into transport row
      totalCost.transport = costs.transport;                  // updates totalCost object with transport value from costs object
    } else {                                                  // else
      tableRows[4].children[0].innerHTML = "&nbsp";           // leaves transport row empty
      tableRows[4].children[1].innerHTML = "&nbsp";
      totalCost.transport = 0;                                // and updates transport value in totalCost object
    }
    tableRows[1].children[1].innerHTML = orderSum();          // puts current sum into SUMA row
  });

// prevent form from being sent
  orderForm.addEventListener("submit", function (event) {
    event.preventDefault();
  });

// function that returns total cost for totalCost object
  function orderSum () {
    if (totalCost.type + totalCost.color + totalCost.fabric + totalCost.transport !== 0) {
      return totalCost.type + totalCost.color + totalCost.fabric + totalCost.transport + " zł";
    } else {
      return "";
    }
  }
}); // DOMContentLoaded
