let container = document.getElementById("container");
let game = document.getElementById("game");
let rightAnswers = 0;
let wrongAnswers = 0;

let fennler = ["Azdili", "Riyaziyyat"]

let levels = ["Asan", "Orta", "Cetin"]

let array = [
    {
        question: "5 %-i 2 olan ədədi tap?",
        A: "A)43",
        B: "B)40",
        C: "C)49",
        D: "D)35",
        correctvariant: "B)40",
        subject: "Riyaziyyat",
        level: "Asan",
    }, {
        question: "(x+3)+(x+1)=12 Tənliyi həll edin?",
        A: "A)3",
        B: "B)5",
        C: "C)4",
        D: "D)35",
        correctvariant: "C)4",
        subject: "Riyaziyyat",
        level: "Asan",
    }, {
        question: "Sürəti 7 olan neçə düzgün olmayan kəsr var?",
        A: "A)7",
        B: "B)32",
        C: "C)4",
        D: "D)6",
        correctvariant: "A)7",
        subject: "Riyaziyyat",
        level: "Asan",
    }, {
        question: "4%-i 5,6 olan ədədi tapın:",
        A: "A)48",
        B: "B)400",
        C: "C)49",
        D: "D)140",
        correctvariant: "D)140",
        subject: "Riyaziyyat",
        level: "Asan",
    }, {
        question: "0,1(3) sonsuz dövrü onluq kəsrini adi kəsrə çevirin.",
        A: "A)2/15",
        B: "B)26/15",
        C: "C)12/15",
        D: "D)7/15",
        correctvariant: "A)2/15",
        subject: "Riyaziyyat",
        level: "Asan",
    }, {
        question:
            "İki ədədin cəmi 5, fərqi 3-dür.Bu ədədlərin hasilini tapın?",
        A: "A)4",
        B: "B)7",
        C: "C)9",
        D: "D)5",
        correctvariant: "A)4",
        subject: "Riyaziyyat",
        level: "Orta",
    }, {
        question: "X≠0 olarsa, 2x(x+y)=5y,x(x-y)=y olduqda x-i tapın?",
        A: "A)3/4",
        B: "B)5",
        C: "C)4/9",
        D: "D)38",
        correctvariant: "A)3/4",
        subject: "Riyaziyyat",
        level: "Orta",
    }, {
        question:
            "x+y=5,x-y=1 olduğuna görə, x2-y2+3x+3y ifadəsinin qiymətini tapın?",
        A: "A)10",
        B: "B)20",
        C: "C)30",
        D: "D)40",
        correctvariant: "B)20",
        subject: "Riyaziyyat",
        level: "Orta",
    }, {
        question: "2x+y=5,x-3y=-5 tənliklər sistemindən x+y cəmini tapın?",
        A: "A)4",
        B: "B)7",
        C: "C)3",
        D: "D)5",
        correctvariant: "C)3",
        subject: "Riyaziyyat",
        level: "Orta",
    }, {
        question: "x+3=2(y-4),y-2=4x tənliklər sistemindən x-i tapın:",
        A: "A)1/15",
        B: "B)2/15",
        C: "C)3/15",
        D: "D)4/15",
        correctvariant: "B)2/15",
        subject: "Riyaziyyat",
        level: "Orta",
    }, {
        question: "Hesablayın: (9-2√10)(9+2√10)?",
        A: "A)36",
        B: "B)12",
        C: "C)12√10",
        D: "D)41",
        correctvariant: "D)41",
        subject: "Riyaziyyat",
        level: "Cetin",
    }, {
        question: "Hesablayın: (3√5+√15)2-10√27?",
        A: "A)80",
        B: "B)70",
        C: "C)60",
        D: "D)50",
        correctvariant: "C)60",
        subject: "Riyaziyyat",
        level: "Cetin",
    }, {
        question: "√(5+2√6)=?",
        A: "A)√2+√6",
        B: "B)√3+√2",
        C: "C)√5+√2",
        D: "D)√3+√5",
        correctvariant: "B)√3+√2",
        subject: "Riyaziyyat",
        level: "Cetin",
    }, {
        question: "A=√6+1 və b=√6 -1 olduğuna görə, a:b+b:a=?",
        A: "A)2,8",
        B: "B)3,8",
        C: "C)3",
        D: "D)2",
        correctvariant: "A)2,8",
        subject: "Riyaziyyat",
        level: "Cetin",
    }, {
        question: "(x-3)2+(y+7)2=0 isə, xy=?",
        A: "A)23",
        B: "B)-32",
        C: "C)21",
        D: "D)-21",
        correctvariant: "D)-21",
        subject: "Riyaziyyat",
        level: "Cetin",
    }, {
        question: "Azərbaycan dilində neçə sait var?",
        A: "A)8",
        B: "B)9",
        C: "C)7",
        D: "D)11",
        correctvariant: "B)9",
        subject: "Azdili",
        level: "Asan",
    }, {
        question: "Azərbaycan dilində neçə samit səs var?",
        A: "A)34",
        B: "B)23",
        C: "C)25",
        D: "D)32",
        correctvariant: "C)25",
        subject: "Azdili",
        level: "Asan",
    }, {
        question: "Hansı kar samitin cingiltili qarşılığı yoxdur?",
        A: "A)H",
        B: "B)F",
        C: "C)G",
        D: "D)C",
        correctvariant: "A)H",
        subject: "Azdili",
        level: "Asan",
    }, {
        question: "Əlifbada neçə hərf var?",
        A: "A)30",
        B: "B)23",
        C: "C)32",
        D: "D)34",
        correctvariant: "C)32",
        subject: "Azdili",
        level: "Asan",
    }, {
        question: "Bitişdirici samitləri göstərin:",
        A: "A)d,t,l",
        B: "B)n,m,s",
        C: "C)m,l,k",
        D: "D)n,y,s",
        correctvariant: "D)n,y,s",
        subject: "Azdili",
        level: "Asan",
    }, {
        question: "Qrammatik cəhətdən feil bildirir?",
        A: "A)Hərəkət",
        B: "B)Xususiyyət",
        C: "C)Keyfiyyət",
        D: "D)Əlamət",
        correctvariant: "A)Hərəkət",
        subject: "Azdili",
        level: "Orta",
    }, {
        question: "Feilin neçə sadə şəkli var?",
        A: "A)4",
        B: "B)5",
        C: "C)6",
        D: "D)8",
        correctvariant: "C)6",
        subject: "Azdili",
        level: "Orta",
    }, {
        question: "Feil haqqında hansı fikir səhvdir?",
        A: "A)feilin dərəcələri var",
        B: "B)feil hərəkət bildirir",
        C: "C)feil təsirli və təsirsiz olur",
        D: "D)feilin 3 zamanı var",
        correctvariant: "A)feilin dərəcələri var",
        subject: "Azdili",
        level: "Orta",
    }, {
        question: "Feilin quruluşca neçə novu var?",
        A: "A)5",
        B: "B)6",
        C: "C)4",
        D: "D)3",
        correctvariant: "D)3",
        subject: "Azdili",
        level: "Orta",
    }, {
        question: "Feil cümlədə əsasən hansı cümlə üzvü olur?",
        A: "A)təyin",
        B: "B)mübtəda",
        C: "C)xəbər",
        D: "D)zərflik",
        correctvariant: "C)xəbər",
        subject: "Azdili",
        level: "Orta",
    }, {
        question: "Hansı əlaqə növü bütün tabeli mürəkkəb cümlələrdə olur?",
        A: "A)Qarşılaşdırma",
        B: "B)Zaman",
        C: "C)Səbəb-nəticə",
        D: "D)Heç biri",
        correctvariant: "B)Zaman",
        subject: "Azdili",
        level: "Cetin",
    }, {
        question: "Mürəkkəb cümlənin hansı növləri var?",
        A: "A)tabeli, tabesiz",
        B: "B)düzəltmə",
        C: "C)əmr",
        D: "D)sadə",
        correctvariant: "A)tabeli, tabesiz",
        subject: "Azdili",
        level: "Cetin",
    }, {
        question: "Mürəkkəb cümlənin neçə novu var?",
        A: "A)6",
        B: "B)2",
        C: "C)5",
        D: "D)3",
        correctvariant: "D)3",
        subject: "Azdili",
        level: "Cetin",
    }, {
        question: "Hansı bağlayıcı merəkkəb cümlənin tərəflərini bağlamır?",
        A: "A)ancaq",
        B: "B)ilə",
        C: "C)belə ki",
        D: "D)yəni",
        correctvariant: "B)ilə",
        subject: "Azdili",
        level: "Cetin",
    }, {
        question: "Mürəkkəb cümlələr neçə növə ayrılır?",
        A: "A)2",
        B: "B)4",
        C: "C)5",
        D: "D)3",
        correctvariant: "A)2",
        subject: "Azdili",
        level: "Cetin",
    }];

fennler.forEach(elem => {
    container.innerHTML += `<button class="subject" onclick="chooseDifficulty('${elem}')">${elem}</button>`;
});

function chooseDifficulty(subject) {
    container.innerHTML = ``;
    levels.forEach(elem => {
        container.innerHTML += `<button onclick="startGame('${elem}', '${subject}')" class="${subject}">${elem}</button>`;
    });
}

function getData(level, subject) {
    return array.filter(elem => elem.level === level && elem.subject === subject);
}

function getContent(i, level, subject) {
    let data = getData(level, subject);
    let pagination = ``;
    let activeClass;
    for(let j = 0; j < data.length; j++) {
        if(j === i) {
            activeClass = "active";
        } else {
            activeClass = "";
        }
        pagination += `<button class="${activeClass}" onclick="getPages(${j}, '${level}', '${subject}')">${j + 1}</button>`;
    }

    return `<p class="${level}">${data[i].question}</p>
    <div id="variants">
    <button onclick="chooseAnswer('${data[i].A}', ${i}, '${level}', '${subject}')">${data[i].A}</button>
    <button onclick="chooseAnswer('${data[i].B}', ${i}, '${level}', '${subject}')">${data[i].B}</button>
    <button onclick="chooseAnswer('${data[i].C}', ${i}, '${level}', '${subject}')">${data[i].C}</button>
    <button onclick="chooseAnswer('${data[i].D}', ${i}, '${level}', '${subject}')">${data[i].D}</button>
    </div>
    <div id="buttons">
    <button onclick="previous(${i}, '${level}', '${subject}')" class="arrows">
    <i class="fa-solid fa-arrow-left"></i>
</button>
    <div id="pagination">`
        + pagination +
        `</div>
    <button onclick="next(${i}, '${level}', '${subject}')" class="arrows">
    <i class="fa-solid fa-arrow-right"></i>
</button>
</div>`;
}

function getPages(i, level, subject) {
    game.innerHTML = getContent(i, level, subject);
}

function startGame(level, subject) {
    container.style.display = 'none';
    game.style.display = 'flex';
    game.innerHTML = getContent(0, level, subject);
}

function chooseAnswer(answer, i, level, subject) {
    let data = getData(level, subject);
    let buttons = document.querySelectorAll("#variants button");
    if(answer === data[i].correctvariant) {
        for(const element of buttons) {
            if(element.innerHTML === answer) {
                element.classList.add("right");
            }
        }
        setTimeout(() => {
            next(i, level, subject);
        }, 1000);
        rightAnswers++;
    } else {
        for(const element of buttons) {
            if(element.innerHTML === answer) {
                element.classList.add("wrong");
            }
            if(element.innerHTML === data[i].correctvariant) {
                element.classList.add("right");
            }
        }
        wrongAnswers++;
        setTimeout(() => {
            next(i, level, subject);
        }, 1000);
    }
}

function next(i, level, subject) {
    let data = getData(level, subject);
    let unAnswered = data.length - rightAnswers - wrongAnswers;
    if(i + 1 > data.length - 1) {
        game.innerHTML = `<div id="result">
<h1>Nəticə</h1>
<ul>
<li>Düz cavabların sayı: ${rightAnswers}</li>
<li>Səhv cavabların sayı: ${wrongAnswers}</li>
<li>Cavablandırılmayan sual sayı: ${unAnswered}</li>
<li>Ümumi sual sayı: ${data.length}</li>
</ul>
</div>`
    } else {
        game.innerHTML = getContent(i + 1, level, subject);
    }
}

function previous(i, level, subject) {
    if(i - 1 < 0) {
        alert("İlk sualdasınız.");
    } else {
        game.innerHTML = getContent(i - 1, level, subject);
    }
}