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

function iLoveTheBeatles(num){
  var array = [];

//   function incrementVariable() {
//   i = i + 1;
// }

do {
  // console.log('array.length = ' + array.length + ' and i = ' + i);
  // array = array.slice(1);
  // incrementVariable();
} while (/*array.length > 0 && i < 5*/);

return array;
}
