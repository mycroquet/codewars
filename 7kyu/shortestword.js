// x Simple, given a string of words, return the length of the shortest word(s).
//
// String will never be empty and you do not need to account for different data types.

function findShort(s){
  var splitArr = s.split(" ")
  var sortedArr = splitArr.sort(function(a, b) {
    return a.length - b.length
  })

for(i = 0; i < sortedArr.length; i++)

  return sortedArr[i].length

}
findShort("bitcoin take over the world maybe who knows perhaps")
