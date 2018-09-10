// add solution here
function theBeatlesPlay(musicians, instruments) {
  var array = [];
  
  for (var i = 1; i < musicians.length ; i++) {
  array.push(musicians[i] + insturments[i]);
  }
  return array;
}