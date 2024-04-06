let ul = document.getElementsByTagName('ul')[0];
let page = 1;
let limit = 10;
let pages = document.getElementById('pages');
let previous = document.getElementById('previous');
let next = document.getElementById('next');
let current = 1;

for(let i = 1; i <= 50; i++) {
    let li = document.createElement('li');
    let liText = document.createTextNode('Item ' + i);
    li.appendChild(liText);
    ul.appendChild(li);
    li.style.fontSize = "2rem";
}

let data = document.querySelectorAll('li');
let countPages = Math.ceil(data.length / limit);

function disableButton(a) {
    a.style.display = "none";
    a.setAttribute("disabled", true);
}

function enableButton(a) {
    a.style.display = "block";
    a.removeAttribute("disabled");
}

function currentPage(pageNum) {
    current = pageNum;

    document.querySelectorAll(".page").forEach((a) => {
        a.classList.remove("active");
        let pageIndex = Number(a.getAttribute("page-index"));
        if(pageIndex == current) {
            a.classList.add("active");
        }
    });

    if(current === 1) {
        disableButton(previous);
    } else {
        enableButton(previous);
    }

    if(countPages === current) {
        disableButton(next);
    } else {
        enableButton(next);
    }

    let rangePrevious = (pageNum - 1) * limit;
    let rangeCurrent = pageNum * limit;

    data.forEach((item, index) => {
        item.style.display = "none";
        if(index >= rangePrevious && index < rangeCurrent) {
            item.style.display = "list-item";
        }
    });
}

window.addEventListener("load", () => {
    for(let i = 1; i <= countPages; i++) {
        let pageNum = document.createElement("a");
        pageNum.className = "page";
        let pageNumText = document.createTextNode(i);
        pageNum.appendChild(pageNumText);
        pageNum.setAttribute("page-index", i);
        pages.appendChild(pageNum);
    }

    currentPage(1);

    previous.addEventListener("click", () => {
        currentPage(current - 1);
    });

    next.addEventListener("click", () => {
        currentPage(current + 1);
    });

    document.querySelectorAll(".page").forEach((a) => {
        let pageIndex = Number(a.getAttribute("page-index"));

        if(pageIndex) {
            a.addEventListener("click", () => {
                currentPage(pageIndex);
            });
        }
    });
});