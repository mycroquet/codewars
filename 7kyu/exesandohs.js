// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contains any char.
//
// Examples input/output:
//
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    let wordSplit = str.toLowerCase().split('')
    let ex = []
    let oh = []


    for (i = 0; i < wordSplit.length; i++){

      if (wordSplit[i] == 'x'){
        ex.push(wordSplit[i])
      }
      if (wordSplit[i] == 'o') {
        oh.push(wordSplit[i])
    }
  }
  console.log(ex)
  console.log(oh)

    if (ex.length === oh.length) {
        return true
    } else return false

}
