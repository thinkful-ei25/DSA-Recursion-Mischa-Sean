function StringSeperator(seperator, string){ 
    // const array = []; 
    const index = string.indexOf(seperator); 

    if (index === -1){ 
        return [string]; 
    }
    return [string.slice(0, index)].concat(StringSeperator(seperator, string.slice(index + seperator.length)));

    // if (string.length === 0){ 
    //     return []; 
    // }
    
    // "Cheese is good"
    // "C" "heese is good"
    // "Ch" "eese "
    // ["Cheese", "is", "good"]
    // ["Cheese", "i]
    // ["Cheese", "is"]
    // ["Cheese", "is",]
    // ["Cheese", "is", "g"]
}



console.log(StringSeperator(" ", "Hello Sean"));
//["Hello", "Sean"];  

//return array
//If not seperator concat into current index
//"Hello"
//Else add a new index  

