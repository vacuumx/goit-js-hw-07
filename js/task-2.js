const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const imageList = document.querySelector(".gallery");

imageList.insertAdjacentHTML("beforeend", `<li class="list-item"> <img src=${images[0].url} alt=${images[0].alt} class="list-img"> </li>
<li class="list-item"> <img src=${images[1].url} alt=${images[1].alt} class="list-img"> </li>
<li class="list-item"> <img src=${images[2].url} alt=${images[2].alt} class="list-img"> </li>
`);