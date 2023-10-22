const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// let temperature;
// let weight;
// let xItem;
// let yItem;
// let zitem;



 const storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
const insertX = [ 'Willy the Goblin' ,
                    'Big Daddy' ,
                    'Father Christmas' ];
const insertY = ['the soup kitchen' ,
                    'Disneyland' ,
                    'the White House' ];
const insertZ = [ 'spontaneously combust ed' , 
    'melted into a puddle on the sidewalk',
    'turned into a slug and crawled away']

randomize.addEventListener('click', result);

function result() {

 xItem = randomValueFromArray(insertX);
 yItem = randomValueFromArray(insertY);
 zItem = randomValueFromArray(insertZ);

let newStory = storyText;
newStory = newStory.replaceAll(':insertx:' ,xItem);
newStory = newStory.replaceAll(':inserty:' ,yItem);
newStory = newStory.replaceAll(':insertz:' ,zItem);

  
if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Bob', name);

  }

  if(document.getElementById("uk").checked) {
     weight = Math.round(300 / 14) + 'stone';
     temperature =  Math.round((94 - 32) * 5/9) + 'centigrade';
     newStory = newStory.replaceAll('94 fahrenheit', temperature);
     newStory = newStory.replaceAll('300 pounds', weight);


  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}


let response;
let score = 75;
let machineActive = false;

// Add your code here
if(machineActive){
  response = 'not on yet';
  } 
  if(score < 0 || score > 100){
response = "This is not possible, an error has occurred.";
}  

   else if(score <= 19){
response = "That was a terrible score — total fail!";
}  

   else if(score <= 39){
response =  "You know some things, but it\'s a pretty bad score. Needs improvement.";
} 

   else if(score <= 69){
response = "You did a passable job, not bad!";
} 

    else if(score <= 89){
response =  "That\'s a great score, you really know your stuff.";
}
  
   else if(score <= 100){
response =  "What an amazing score! Did you cheat? Are you for real?"; 
}
 
  else{
   response = 'switch it on';
  }

// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
let para2 = document.createElement('p');

para1.textContent = `Your score is ${ score }`;
para2.textContent = response;

section.appendChild(para1);
section.appendChild(para2);



let machineActive = true;
let pwd = 'cheese';

let machineResult;
let pwdResult;

// Add your code here
if(machineActive === false){
}

else{
  machineResult = 'switch off';
}
  if (pwd === "cheese"){
    pwdResult = 'login successfully';
}  else if(pwd ==! cheese){
   pwdResult = 'login attemp failed';
}


// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
let para2 = document.createElement('p');

para1.textContent = machineResult;
para2.textContent = pwdResult;

section.appendChild(para1);
section.appendChild(para2);





