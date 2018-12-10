function arrayDouble(arr){
  if(arr.length === 0){
    return [];
  }else {
    return [
      
      (arr[0] * 2 ), ...arrayDouble(arr.slice(1))
      
    ] ;
  }
}

console.log(arrayDouble([1,2,3,4,5]));

// 2 ==> arrayDouble(2,3,4,5)
// 4 ==> arraudlbe (3,4,5) === [6, 8 , 10]