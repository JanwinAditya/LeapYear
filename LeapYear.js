//1.Take year as input
var year =prompt("Enter the year you want to check");


//2.Check for all divisibilities and output as framed by logic

if (year%4 ===0){
    if (year%100 ===0){
         if (year%400===0){
              alert("It is a leap year")
            }
   
         else{
            alert("Not a leap year")
             }
    }
   
    else{
    alert("It is a leap year")
    }
    
}

else{
    alert("Not a leap year")
}