function CountingSheepR(numSheep){ 
    console.log(`${numSheep}- Another sheep jumps over the fence`); 
    if (numSheep <= 1){ 
        return; 
    }
    else { 
       return CountingSheepR(numSheep-1);  
    }
}

function CountingSheepI(numSheep){ 
    
    for(let i = numSheep; i >= 1; i--){ 
        console.log(`${i}- Another sheep jumps over the fence`); 
    }
}

//O(n)
CountingSheepR(3);
//O(n) 
CountingSheepI(3); 

