function factR(num){
  if(num === 1){
    return 1;
  }
  return  num * factR(num-1);
}

function factI(num){ 
  let fact = 1; 
  for(let i=2; i <= num; i++){ 
    fact *= i; 
  }
  return fact; 
}

//O(n)
console.log(factR(8));
//O(n)
console.log(factI(8)); 
