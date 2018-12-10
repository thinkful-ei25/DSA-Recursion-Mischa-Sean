/* 
  ---
  string[0] + string 1 2 3, string 2,3,1 string 3,2,1
  string[1] 0,2,3 2,3,0 3,2,0
  string 2 0,1,3 
  string 3 0,1,2



*/
function anagram(str, prefix='', per=[], perCount=0, finished=0){
  //base case
  if(finished-1 === str.length){
    return '';
  }
  perCount += 1;
  if(perCount === per.length){
    perCount = 0;
    prefix = str[str.length-1];
    per = str.slice(0, str.length-1).split('');
    finished += 1;
  }else{
    prefix = str[0];
    per = str.slice(1).split('');
    per.push(per[0]);
    per.shift();
  }
 

  const stringPer = per.join('');
  str = prefix + stringPer;
  console.log(str);



  return anagram(str, prefix, per, perCount, finished);



  //contact prefix with rotated string

  //if perm is rotated then prefix = str[0+
  
}
anagram('what');

//what wath wtha
// wtah

//prefix ==> h 
//per == wta
//str 