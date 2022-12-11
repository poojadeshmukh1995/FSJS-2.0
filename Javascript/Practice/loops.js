let num = 10;

if(num == 10) {
    console.log('1st if');
}
 if(num > 1){
    console.log('2nd if');
} else if(num <= 10 ){
    console.log('3rd if')
} else {
    console.log('last cond')
}

switch(num) {

    case num > 1 :
        console.log('sw1');
        break;
      
    case (num <= 10 ) :  
    console.log('sw2')
    break;

    default:
        console.log('default switch')
}