function duplicateCount(text){
  //...
  let arr = text.toLowerCase().split("").sort()
  let result = []

  if(arr.length < 1) {
    return 0
  }
  else {
    arr.forEach(function(element, index) {

    // Find if there is a duplicate or not
    if (arr.indexOf(element, index + 1) > -1) {

      // Find if the element is already in the result array or not
      if (result.indexOf(element) === -1) {
        result.push(element);
      }
    }
  })
    if(result.length < 1) return 0
  }
  return result.length
}
