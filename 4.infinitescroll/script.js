const count = 10;
const apiKey = "HvzFRyLo0U6xnYnLGfMr8e3tvmrv0G_zWCLr1K79C8s";
const link = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

let photosArray = [];

async function getPhotos() {
  const response = await fetch(link);

  photosArray = await response.json();

  displayPhotos(photosArray);
}
//
function displayPhotos(photosArray) {
  console.log(photosArray);
  photosArray.forEach((element) => {
    document.getElementById("image-container").innerHTML += `

  
   <img
     src=${element.urls.regular}
     alt=""
   />
 
   `;
  });
}

document.addEventListener("scroll", (e) => {
  document.querySelector("body").style.background = "green";
});

getPhotos();
