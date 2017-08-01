function orderWeight(strng) {

    var tokenArray = strng.split(' ');
    const mapper = str => {
      return str.split('').map(Number).reduce(add, 0);
    };
    var int = tokenArray.sort((a,b) => {
      return mapper(a) - mapper(b);
    });
    var result = int.join(" ")

      console.log(result)

         function add(a,b){
          return a + b
        }

      return result

}
