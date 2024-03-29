var num = Number(prompt('Ədəd daxil edin:'));

function polindrom(num) {
    //Stringə çeviririk.
    var str = num.toString();
    //Uzunluğunu tapırıq.
    var len = str.length;
    //Ortadan sağ və solda neçə simvol olduğunu tapırıq.
    var orta = Math.floor(len / 2);
    for(var i = 0; i < orta; i++) {
        if(str[i] != str[len - 1 - i]) {
            //Sonuncu və ilk simvolların bərabərliyini yoxlayırıq.
            return alert('Bu ədəd polindrom deyil.');
        } else {
            return alert('Bu ədəd polindromdur.');
        }
    }
}

polindrom(num)