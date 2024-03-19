var arr = 'Lorem ipsum ipsum dolor sit amet amet consectetur adipiscing elit.';

var unique = [...new Set(arr.split(" "))].join(" ");

console.log(unique);