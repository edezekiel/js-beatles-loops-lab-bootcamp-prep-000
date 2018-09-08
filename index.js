// add solution here

//for loop

function theBeatlesPlay(musicians, instruments){
  var newArray = [];
  for (let i = 0; i < musicians.length ; i++){
    newArray.push(musicians[i] + " plays " + instruments[i])
    }
    return newArray
}

// while loop
function johnLennonFacts(array){
  var newArray = [];
  var i = 0;

  while (i < array.length){
  newArray.push(array[i] + "!!!");
  i++
  }
  return newArray
}


// function iLoveTheBeatles(){
//
// }
