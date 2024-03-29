var number = Number(prompt('Ədəd daxil edin: '))

var sum = 0;
//Stringə çeviririk.
var numStr = number.toString();

for(var i = 0; i < numStr.length; i++) {
    //Bütün ədədlərini toplayırıq.
    sum += parseInt(numStr.charAt(i));
}

alert(sum)