const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
  const imagesArray = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg"];

/* Declaring the alternative text for each image file */
const imagesText = {
  "pic1.jpg": "Nice image",
  "pic2.jpg": "Awesome",
  "pic3.jpg": "Wow!",
  "pic4.jpg": "Cute",

}

/* Looping through images */
 
for (const element of imagesArray){
  // console.log(element);


  const newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/' +element);
  newImage.setAttribute('alt', imagesText[element]);
  thumbBar.appendChild(newImage);
   newImage.addEventListener("click", (e) => {
     displayedImage.setAttribute('src', 'images/' +element);
     displayedImage.setAttribute('alt', imagesText[element]);

      // console.log(displayedImage);

   })

}

/* Wiring up the Darken/Lighten button */

 btn.addEventListener("click", (e) => {
 btn.getAttribute('button');
  if(className == dark){
    

  }



 })
