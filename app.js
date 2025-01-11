const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "nezuko",
    price: 29,
    colors: [
      {
        code: "1",
        img: "./img/nezuko.png",
      },
      {
        code: "2",
        img: "./img/nezuko2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Rengolu",
    price: 49,
    colors: [
      {
        code: "1",
        img: "./img/rengoku.png",
      },
      {
        code: "2",
        img: "./img/rengoku2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Sasuke",
    price: 49,
    colors: [
      {
        code: "1",
        img: "./img/sasuke.png",
      },
      {
        code: "2",
        img: "./img/sasuke2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Itachi",
    price: 59,
    colors: [
      {
        code: "1",
        img: "./img/itachi.png",
      },
      {
        code: "2",
        img: "./img/itachi2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Sakura",
    price: 39,
    colors: [
      {
        code: "1",
        img: "./img/sakura.png",
      },
      {
        code: "2",
        img: "./img/sakura2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});