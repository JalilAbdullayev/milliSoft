var num = Number(prompt("Ədəd daxil edin"));
for(i = 0; i <= num; i++) {
    if(num % i == 0) {
        document.write(i + "<br/>");
    }
}