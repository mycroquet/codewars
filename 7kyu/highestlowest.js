// In this little assignment you are given a string of space separated numbers,
// and have to return the highest and lowest number.

function highAndLow(numbers){
    var splitArr = numbers.split(" ")

   return Math.max.apply(null, splitArr) + " " +  Math.min.apply(null, splitArr)

}
