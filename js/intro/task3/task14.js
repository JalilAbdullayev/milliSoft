var length = prompt("Uzunluğu daxil edin:");
var chars = "abcçdeəfgğhıijklmnoöpqrsştuüvwxyzABCÇDEƏFGĞHIJKLMNOÖPQRSŞTUÜVWXYZ0123456789";
var random = "";

for(var i = 0; i < length; i++) {
    var index = Math.floor(Math.random() * chars.length);
    random += chars.charAt(index);
}
alert(random)