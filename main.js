//open you're console BEFORE you run this

//var genesis = "In the beginning God created the heavens and the earth.";
var genesis = "In";//let's just try this first :)
var typeCount = 0;
var correctCharsTyped = 0;
var longestStreak = 0;
var startingTime = getTime();
var endingTime;

/////////Here's the loop///////////////////////
while(true){
  //----makes it wait every second----------
  var time = getTime();
  while(true){
    if(getTime()-time>1000){
      break;
    }
  }
  //---------------
  var result=checkIfThisIsTheWordOfGod();
  typeCount++;
  if(result){
    endingTime = getTime();
    break;
  }
}
///////made it to the end//////////////////////
var totalTime = endingTime-startingTime;
totalTime = totalTime/1000;
console.log("It's a miracle!");
console.log("It only took "+typeCount+" tries!");
console.log("It only took "+totalTime+" seconds!");




/////////FUNCTIONS/////////////////////////////
function getRandomChar(){
  var num = Math.floor(Math.random() * 96+31);//there are 95 printable characters
  var chr = String.fromCharCode(num);
  return chr;
}

function checkIfThisIsTheWordOfGod(){
  console.log("Monkey attempting to type: '"+genesis+"'");
  console.log("Number of monkey attemps: "+typeCount);
  for(var i=0; i<genesis.length; i++){
    randChar=getRandomChar();
    console.log("Correct characters typed: "+correctCharsTyped);
    console.log("Longest streak of correct characters typed: "+longestStreak);
    if(randChar===genesis.charAt(i)){
      longestStreak = i+1;
      correctCharsTyped++;
      console.log("Yeah! We wanted '"+genesis.charAt(i)+"'\n and we got '"+randChar+"'");
    }
    else{
      console.log("oops! We wanted '"+genesis.charAt(i)+"'\n instead we got '"+randChar+"'");
      return false;
      break;
    }
  }
  return true;
}

function getTime(){
  var d = new Date();
  return d.getTime();
}