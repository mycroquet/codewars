function orderWeight(strng) {

    var tokenArray = strng.split(' ');
    const mapper = str => {
      return str.split('').map(Number).reduce(add);
    };

    var int = tokenArray.sort((a,b) => {
      let mappedA =  mapper(a);
      let mappedB = mapper(b);
      if(mappedA === mappedB){
        return a.localeCompare(b);

      }
      return mappedA - mappedB;
    });
    var result = int.join(' ');

      console.log(result)

         function add(a,b){
          return a + b
        }


      return result

}
