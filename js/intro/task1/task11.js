var num = Number(prompt("Ədəd daxil edin"));
for(i = 100; i <= 999; i++) {
    if(i % num == 0) {
        document.write(i + "<br/>");
    }
}