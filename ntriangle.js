function nthTriangularNumber(numTri){
  if(numTri === 1){
    return 1;
  }
  
  return nthTriangularNumber(numTri - 1) + numTri;

}

console.log(nthTriangularNumber(9));