var text1 = 'massa tincidunt dui ut ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget felis eget nunc lobortis mattis aliquam'
var text2 = 'aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit amet cursus sit amet dictum sit amet justo donec enim diam vulputate ut pharetra sit amet aliquam id diam maecenas ultricies mi eget mauris pharetra et ultrices neque ornare aenean euismod elementum nisi'

var text1Split = text1.split(' ');
var count = 0;
var text;
for(var i = 0; i < text1Split.length; i++) {
    if(i < text1Split.length - 2) {
        text = text1Split[i] + ' ' + text1Split[i + 1] + ' ' + text1Split[i + 2];
        // console.log(text);
    }
}

if(text != "") {
    if(text2.includes(text)) {
        count++;
    }
}

if(text1Split.length-2*0.2 <= count) {
    console.log("Plagiat")
} else {
    console.log("No Plagiat")
}