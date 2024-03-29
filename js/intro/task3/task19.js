var str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et" +
    " dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n";

function substring(str) {
    var arr = str.split(" ");
    var newarr = [];
    for(var i = 0; i < arr.length; i++) {
        if(arr[i].length > 5) {
            //? Sözlərin sayını çıxarır. Hərfləri yox.
            newarr.push(arr[i]);
        }
    }
    return newarr.join(" ");
}

document.write(substring(str))