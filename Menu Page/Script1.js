
function rolldice(){
    
    let dieOneValue = Math.floor(Math.random()*6);
    let dieTwoValue = Math.floor(Math.random()*6);
    let total = ( (dieOneValue +1) + (dieTwoValue +1) );

    console.log(dieOneValue,dieTwoValue);
    console.log(total)

 }