function CountingSheep(numSheep){ 
    console.log(`${numSheep}- Another sheep jumps over the fence`); 
    if (numSheep <= 1){ 
        return; 
    }
    else { 
       return CountingSheep(numSheep-1);  
    }
}

CountingSheep(3); 