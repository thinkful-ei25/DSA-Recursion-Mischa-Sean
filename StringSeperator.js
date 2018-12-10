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



function stringSeperator(string, seperator){ 

    //base case
    if (string.length === 0){ 
        return []; 
    }

    if (string[0] === seperator){ 
        //create new index in array
        //remove the first element in the string
        //recursive call
    }
    else{ 
        //add first element of the string to the last index of the array
        //remove the first element in the string
        //recursive call
    }
    

}