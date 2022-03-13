var minute =25;
var second = '00';


function template(){
    document.querySelector('.minutes').innerHTML= minute;
    document.querySelector('.seconds').innerHTML= second;

}

function start(){
    minute=24;
    second=59;
    document.querySelector('.minutes').innerHTML= minute;
    document.querySelector('.seconds').innerHTML= second;
    var mininterval = setInterval(minuteInterval , 60000);
    var secinterval = setInterval(secondInterval , 1000);
var input = document.querySelector('input');
    console.log(input.innerHTML);
   

    function minuteInterval(){
        minute =minute-1;
        document.querySelector('.minutes').innerHTML= minute;

    }
    function secondInterval(){
        second = second-1;
        if(second<=0){
            if(minute<=0){
                clearInterval(mininterval);
                clearInterval(secinterval);
                
            }
            second='00';
            minute='00';
            document.querySelector('.minutes').innerHTML= minute;
            document.querySelector('.done-message').innerHTML= "Take a Break! Your Session is Completed";
            
        }
        document.querySelector('.seconds').innerHTML= second;
       
        
    }


}