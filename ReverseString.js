function ReverseString(string){ 
    if (string === ""){ 
        return ""; 
    } else { 
        return ReverseString(string.slice(1)).concat(string[0]); 
    }

}

console.log(ReverseString('String Cheese')); 

//tring Cheese S
//ring Cheese tS
//ing Cheese rtS
//ng Cheese irtS
//g Cheese nritS

