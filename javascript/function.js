function sayHello(name){
  console.log("Hello " + name);
}
/////////////

sayHello('rofiah');

console.log('javascript is easy')
for(let i=1; i <=5; i++) {
  console.log("javascript is fun")
}

///////////
/////aa;paja
/////
console.log('javascript is easy')
///////////
///////////
//////////
console.log('javascript is easy')

/////////
sayHello('Mariam');


function sum(num1, num2) {
  console.log(num1 + num2)
}

sum(100,200);
//////////
sum(20,16);



const myText = "The weather is cold";
const newString = myText.replace("cold", "warm");
console.log(newString);





const myLife = "The aim of early marriage is an amazing one, May allah grant us pure offspring";
const newWord = myLife.replace("offspring", "life");
console.log(newWord);


function draw() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  for (let i = 0; i < 100; i++) {
    ctx.beginPath();
    ctx.fillStyle = "rgba(255,0,0,0.5)";
    ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
    ctx.fill();
  }
}


const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btn.addEventListener("click", () => {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});



const btn = document.querySelector('.off');

// Add your code here
btn.addEventListener('click', () => {
  btn.textContent = "javascript is fun";

 if(btn.textContent ="javascript is fun"){
   btn.textContent = "another content"

}

 else {
  btn.textContent = "another "
}

});


function random(){
  Math.floor(Math.random() * number);
}
