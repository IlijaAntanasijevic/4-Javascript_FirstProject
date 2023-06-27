var tmp = "";

//Nav menu - Dinamicki ispis
let navMenu = document.getElementById('navMenu');
var navHref = ["#author", "#Gallery", "#price", "#sectionContact"];
var navText = ["Autor", "Galerija", "Cenovnik", "Rezervacije"];

for (let i in navHref) {
    tmp += `<li><a href ='${navHref[i]}'>${navText[i]}</a></li>`;
}
navMenu.innerHTML = tmp;
tmp = "";

//Hamburger
let hamb = document.querySelector("#contentHamb ul");
for (let i in navText) {
    tmp += `<li><a href ='${navHref[i]}'>${navText[i]}</a></li>`;
}
hamb.innerHTML = tmp;
tmp = "";
// Table Content X/O
let firstRow = document.querySelector('.first-row');
let secondRow = document.querySelector('.second-row');
let thirdRow = document.querySelector('.third-row');
let animation = document.querySelector('.tableAnimation');

var tableSpan = new Array('first-', 'second-', 'third-', 'fourth-', 'fifth-', 'sixth-', 'seventh-', 'eight-', 'ninth-');
var tableContent = ['X', 'O'];
var counter = 0;

for (let i = 0; i < tableSpan.length; i++) {
    counterFnc(i);
    tmp += `<span id="${tableSpan[i]}${tableContent[counter]}">${tableContent[counter]}</span>`;
    if (i == 2) {
        firstRow.innerHTML = tmp;
        tmp = "";
    }
    if (i == 5) {
        secondRow.innerHTML = tmp;
        tmp = "";
    }
}
thirdRow.innerHTML = tmp;

//Table Animation
let random = [];
while (random.length < 9) {
    let numberArr = Math.floor(Math.random() * 9); // 0-8
    if (random.indexOf(numberArr) == -1) random.push(numberArr)
}
for (var i = 0; i < tableSpan.length; i++) {
    counterFnc(i);
    var tableId = document.getElementById(`${tableSpan[i]}${tableContent[counter]}`);
    switch (random[i]) {
        case 0: tableId.classList.add(`tableAnimation`); break;
        case 1: tableId.classList.add(`tableAnimation1`); break;
        case 2: tableId.classList.add(`tableAnimation2`); break;
        case 3: tableId.classList.add(`tableAnimation3`); break;
        case 4: tableId.classList.add(`tableAnimation4`); break;
        case 5: tableId.classList.add(`tableAnimation5`); break;
        case 6: tableId.classList.add(`tableAnimation6`); break;
        case 7: tableId.classList.add(`tableAnimation7`); break;
        case 8: tableId.classList.add(`tableAnimation8`); break;
    }
}

function counterFnc(i) {
    switch (i) {
        case 1:
        case 5:
        case 3:
        case 6:
            counter = 1; break;
        case 0:
        case 4:
        case 2:
        case 7:
        case 8:
            counter = 0; break;
    }
}

//PriceList Dynamically
tmp = ""

let btnDrinks = document.querySelector("#listDrinks");
let btnValue = ['Viski', 'Vodka', 'Gin', 'Vino', 'Pivo', 'Ostalo'];
let btnId = ['whiskey', 'vodka', 'gin', 'rak', 'beer', 'other']

for (let i in btnValue) {
    tmp += `<input type="button" value = "${btnValue[i]}" id="${btnId[i]}"/>`;
}
btnDrinks.innerHTML = tmp;
tmp = "";


//********************PRICE LIST************************************ */

let priceImg = document.querySelector("#priceImg");
let baseUrl = 'assets/img/'
let priceBorderClass = 'priceBorder';

let imgUrl = ['jackDanielsPS.webp', 'chivasPS.webp', 'randomWhiskeyPS.webp'];
let imgAlt = [`JackDaniel's`, `Chivas`, 'Lagavulin 16YO']
let drink = [`Jack Daniel's`, `Chivas`, 'Lagavulin'];
let price = ['7.000 RSD', '10.000 RSD', '15.000 RSD'];

for (let i in imgUrl) {
    tmp += `<div class = "${priceBorderClass}">
            <img src= "${baseUrl}${imgUrl[i]}" alt = "${imgAlt[i]}">
            <p>${drink[i]}</p><span>${price[i]}</span></div>`
}
priceImg.innerHTML = tmp;
tmp = "";

let viskiId = document.querySelector("#whiskey");
let vodkaId = document.querySelector('#vodka');
let ginId = document.querySelector("#gin");
let rakId = document.querySelector("#rak");
let BeerID = document.querySelector("#beer");
let Other = document.querySelector("#other");

/*Vodka Info*/
let imgUrlVodka = ['vodkaPS.webp', 'vodka1PS.webp', 'vodka2PS.webp'];
let imgAltVodka = [`absolutVodka`, 'hendrix', 'Chivas']
let drinkVodka = [`Absolut Vodka`, 'Hendrix', 'Oginski Vodka'];
let priceVodka = ['8.500 RSD', '6.000 RSD', '15.000 RSD'];
/*Gin Info*/
let imgUrlGin = ['gin1PS.webp', 'gin2PS.webp', 'gin3.webp'];
let imgAltGin = [`tuckombilGin`, 'gin47', 'BränneriGin']
let drinkGin = [`Tuckombil Dry Gin`, 'Monkey 47 Gin', 'Bränneri'];
let priceGin = ['4.000 RSD', '12000 RSD', '19.000 RSD'];
/*Wine info*/
let imgUrlRak = ['vine1PS.webp', 'vine2PS.webp', 'vine3PS.webp', 'vine4PS.webp', 'vine5PS.webp'];
let imgAltRak = [`RasteauWine`, 'modaWine', 'broadLeafWine', 'lasperdicesWine', 'TaylorsWine']
let drinkRak = [`Rasteau Wine`, 'Talamonti Moda', 'Broadleaf', 'Las Perdices', 'Taylors'];
let priceRak = ['4.000 RSD', '3.000 RSD', '5.000 RSD', '3.500', '5.000'];
/*beer Info*/
let imgUrlBeer = ['beer1PS.webp', 'beer2PS.webp', 'beer3PS.webp'];
let imgAltBeer = [`HeinekenBeer`, 'modeloBeer', 'budLightBeer']
let drinkBeer = [`Heineken`, 'Modelo', 'Bud Light'];
let priceBeer = ['300 RSD', '350 RSD', '500 RSD'];
/* Other Info */
let imgUrlOther = ['coctail1PS.webp', 'schweepsPS.webp', 'redbullPS.webp', 'lemonadePS.webp', 'cocePS.webp', 'orangePS.webp'];
let imgAltOther = [`Coctail`, 'schweppesJuice', 'redBull', 'Lemonade', 'CocaCola', 'orangeJuice']
let drinkOther = [`Blue Lagoon`, 'Schweppes', 'Red Bull', 'Limunada', 'Coca Cola', 'Cedjena narandža'];
let priceOther = ['1.100 RSD', '400 RSD', '600 RSD', '500 RSD', '400 RSD', '700 RSD'];


filter(viskiId, imgUrl, imgAlt, drink, price);
filter(vodkaId, imgUrlVodka, imgAltVodka, drinkVodka, priceVodka);
filter(ginId, imgUrlGin, imgAltGin, drinkGin, priceGin);
filter(rakId, imgUrlRak, imgAltRak, drinkRak, priceRak);
filter(BeerID, imgUrlBeer, imgAltBeer, drinkBeer, priceBeer);
filter(Other, imgUrlOther, imgAltOther, drinkOther, priceOther);


function filter(Id, img, alt, drink, price) {
    Id.addEventListener("click", function () {
        filterDrinks(img, alt, drink, price)
    })
}

function filterDrinks(imgurl, imgalt, drinkName, price) {
    tmp = "";
    for (let i in imgurl) {
        tmp += `<div class = "${priceBorderClass}">
                <img src= "${baseUrl}${imgurl[i]}" alt = "${imgalt[i]}">
                <p>${drinkName[i]}</p><span>${price[i]}</span></div>`
    }
    priceImg.innerHTML = tmp;
}

//*******************END PRICE LIST********************************* */


/******************************Gallery*******************************/
var slider = document.getElementById('slider');

var baseSliderUrl = 'assets/img/';
var images = ['slider.webp', 'hero.webp', 'sectionBackground.webp'];
var showImages = ['dj2.webp', 'galleryPhoto1.webp', 'galleryPhoto2.webp', "galleryPhoto3.webp", 'dj.webp', 'galleryPhoto5.webp', 'galleryPhoto4.webp', 'galleryPhoto6.webp', 'slider.webp', 'hero.webp', 'sectionBackground.webp'];
var createImg, createDiv;

for (let i = 0; i < images.length; i++) {
    createDiv = document.createElement('div');
    createDiv.setAttribute('class', 'imgBox');
    createImg = document.createElement('img');
    createImg.setAttribute('src', `${baseSliderUrl}${images[i]}`);
    createImg.setAttribute('alt', 'slika');
    createDiv.appendChild(createImg);
    slider.appendChild(createDiv);
}

//About Content
/*********************Counter *****************/
let countBool = false;
window.addEventListener('scroll', () => {
    let div = document.getElementById("secAbout");
    let postion = div.getBoundingClientRect();
    let x = postion.top;
    if (x <= (window.innerHeight) && !countBool) {
        countBool = true;
        let count = document.querySelectorAll('#secAbout span');

        let niz = [0, 0, 0];
        let duration = [0, 0, 0];
        let pomNiz = [0, 0, 0];
        for (let i = 0; i < count.length; i++) {
            niz[i] = parseInt(count[i].textContent);
            let m = niz[i] / 3;
            duration[i] = 800 / m;
            console.log(duration[i]);
        }

        for (let i = 0; i < count.length; i++) {
            increase(niz[i], pomNiz[i], i, duration[i]);
        }

        function increase(x, y, i, duration) {
            let j;
            j = setInterval(() => {
                if (y < x) {
                    if (count[i].textContent == 2010) {
                        y = 900;
                        count[i].textContent = y;
                    }
                    else {
                        y++;
                        count[i].textContent = y;
                    }
                }
            }, duration);
            if (y == x) clearInterval(j);
        }
    }

})
//********************END COUNTER*********************************** */

/***********************FORM*******************************/
let ddlValue = ['0', '2', '3', '4', '5', '6', '7', 'more']
let ddlText = ['Izaberite', '2', '3', '4', '5', '6', '7', '8+']
let ddl = document.querySelector("#numberPpl");
for (let i in ddlValue) {
    tmp += `<option value = "${ddlValue[i]}">${ddlText[i]}</option>`
}
ddl.innerHTML = tmp;
tmp = "";

/*Check Form */
var ime = document.querySelector('#ime');
var prezime = document.querySelector('#prezime');
var tel = document.querySelector('#telefon');
var ppl = document.querySelector("#numberPpl");
var rb = document.getElementsByName('rbDay');
var btnSubmit = document.getElementById("submit");
var success = document.getElementById("okText");

textChange(ime);
textChange(prezime);
textChange(telefon);

function textChange(obj) {
    obj.addEventListener("focus", function () {
        obj.classList.add("textInput");
    })
    obj.addEventListener("blur", function () {
        obj.classList.remove("textInput");
    })
}

var reName = /^[A-Zčćžšđ][a-zčćžšđ]{2,19}(\s[A-Zčćžšđ][a-zčćžšđ]{2,19})?$/;
var reLname = /^[A-Zčćžšđ][a-zčćžšđ]{3,20}(\s[A-Zčćžšđ][a-zčćžšđ]{3,20})?$/;
var reNumber = /^\+3816[\d]{6,9}$/


addEventListener('keypress', function () {
    if (event.keyCode == 13) {
        formCheck();
    }
})

btnSubmit.addEventListener("click", formCheck)
function formCheck() {
    let brojGresaka = 0;
    let rbText = "";
    let pplValue = ppl.options[ppl.options.selectedIndex].value;
    let pplText = ppl.options[ppl.options.selectedIndex].text;

    if (!(rb[0].checked || rb[1].checked)) {
        document.getElementById("dayErr").classList.add('errorMess');
        brojGresaka++;

    }
    else {
        document.getElementById("dayErr").classList.remove(`errorMess`);

    }
    if (!reName.test(ime.value)) {
        document.querySelector('#nameErr').classList.add(`errorMess`);
        brojGresaka++;
        ime.classList.add('prikazi');

    }
    else {
        document.querySelector('#nameErr').classList.remove(`errorMess`);
        ime.classList.remove('prikazi');

    }
    if (!reLname.test(prezime.value)) {
        document.querySelector('#lastnameErr').classList.add(`errorMess`);
        brojGresaka++;
        prezime.classList.add('prikazi');
    }
    else {
        document.querySelector('#lastnameErr').classList.remove(`errorMess`);
        prezime.classList.remove('prikazi');
    }

    if (!reNumber.test(tel.value)) {
        document.querySelector('#phoneErr').classList.add(`errorMess`);
        brojGresaka++;
        tel.classList.add('prikazi');
    }
    else {
        document.querySelector('#phoneErr').classList.remove(`errorMess`);
        tel.classList.remove('prikazi');
    }
    if (pplValue == 0) {
        document.querySelector("#pplErr").classList.add('errorMess');
        brojGresaka++;
    }
    else {
        document.querySelector("#pplErr").classList.remove('errorMess');
    }
    if (rb[0].checked) {
        rbText = 'Petak';
    }
    else if (rb[1].checked) {
        rbText = 'Subota';
    }
    console.log(brojGresaka);
    if (brojGresaka == 0) {
        success.classList.add('success');
        success.innerHTML = `Uspešno ste rezervisali vaše mesto:<br/> ${rbText} za
        ${pplText} osobe. Vidimo se`;
    }
    else {
        success.classList.remove('success');
    }
}
var btnReset = document.getElementById("reset");
btnReset.addEventListener("click", function () {
    ime.value = "";
    prezime.value = "";
    tel.value = "";
    ime.classList.remove('prikazi');
    prezime.classList.remove('prikazi');
    tel.classList.remove('prikazi');
    document.querySelector('#nameErr').classList.remove(`errorMess`);
    document.querySelector('#lastnameErr').classList.remove(`errorMess`);
    document.querySelector('#phoneErr').classList.remove(`errorMess`);
    rb[0].checked = false;
    rb[1].checked = false;
    document.getElementById("dayErr").classList.remove('errorMess');
    document.querySelector("#pplErr").classList.remove('errorMess');
    ppl.value = 0;
    success.classList.remove('success');
})
/****************END FORM********************************/



let navHrefFooter = ["#", "#Gallery", "#price", "#sectionContact"];
var navTextFooter = ["Početna", "Galerija", "Cenovnik", "Rezervacije"];
//Nav menu - Footer
let navFooter = document.querySelector("#footerLinksUl");
for (let i in navHref) {
    tmp += `<li><a href ='${navHrefFooter[i]}'</a>${navTextFooter[i]}</li>`;
}
navFooter.innerHTML = tmp;
/******************Date Count************************/
let dateCount = new Date("December 30,2022 05:00:00");
var second = 1000;
var min = second * 60;
var hour = min * 60;
var day = hour * 24;
var timeLeft;
var timerText = document.getElementById("timerText");

/*****************jQuery**********************************/
$(document).ready(function () {
    //Hamburger
    let click = 0;
    $('#open').click(function () {
        if (click % 2 == 0) { //X
            $('#open span:eq(1)').fadeTo('slow', 0);
            $('#open span:eq(0)').css({
                transform: 'rotateZ(45deg)',
                transition: "0.5s ease-in-out"
            })
            $('#open span:eq(2)').css({
                transform: 'rotateZ(-45deg)',
                transition: "0.5s ease-in-out",
                top: 20
            })
        }
        else {
            $('#open span:eq(1)').fadeTo('slow', 1);
            $('#open span:eq(0)').css({
                transform: 'rotateZ(0deg)'
            })
            $('#open span:eq(2)').css({
                transform: 'rotateZ(0deg)',
                top: 40
            })
        }
        $('#contentHamb').slideToggle(200);
        click++;
    });

    /****Connect table*** */
    $('.connect-table').animate({
        opacity: 'show'
    }, 5000);

    /*Scroll Delay */
    $(function () {
        setTimeout(function () {
            $('html, body').css({
                'overflow': 'auto'
            })
        }, 2000);
    });
    /*********** Show arrow*************/
    $(document).scroll(function () {
        var scroll = window.scrollY;

        if (scroll > 1000) {
            $('#arrow').fadeIn(600);
        }
        else {
            $('#arrow').fadeOut(600);
        }
    })
    /***********Scroll to top********** */
    $('#arrow').click(function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

    })
    /************Timer*********/
    var scrolled = false;
    let open = false;
    $('#sectionContact').mouseenter(function () {
        if (!scrolled) {
            prikazi();
        }
        scrolled = true;
    })
    //Timer Function
    function prikazi() {
        $('#tajmer').show('slow');
        $('#tajmer').dimBackground();

        var countDate = setInterval(function () {
            let dateNow = new Date();
            timeLeft = dateCount - dateNow;

            if (timeLeft < 0) {
                clearTimeout(countDate);
            }

            var $days, $hours, $min, $sec;
            $days = Math.floor(timeLeft / day);
            $hours = Math.floor(((timeLeft % day) / hour))
            $min = Math.floor(((timeLeft % hour) / min))
            $sec = Math.floor(((timeLeft % min) / second))
            timerText.textContent = `Još ${$days} dana ${$hours}:${$min}:${$sec} sata`;
        }, 1000)
    }
    //Close timer
    $('#exit').click(function () {
        $('#tajmer').hide();
        $('#tajmer').undim();
        open = true;
    })
    $(window).click(function () {
        if (!open) {
            $('#tajmer').hide();
            $('#tajmer').undim();
        }
        open = true;
    })

    /*******Scroll to top Footer Link *****/
    $('#footerLinksUl li a:first').click(function (e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

    })

    /***********Show Author***********/
    var a = $(`nav #navMenu li a`);
    var $h = $(`nav #contentHamb ul li a`);
    $(a[0]).click(function () {
        $('#author').animate({
            width: "toggle"

        });
        $('html, body').css({
            overflow: 'hidden',
        });
    });
    $('#close').click(function () {
        $('#author').hide(300);
        $('html, body').css({
            overflow: 'auto'
        });
    })

    $($h[0]).click(function () {
        $('#author').animate({
            width: "toggle"

        });
        $('html, body').css({
            overflow: 'hidden',
        });
    });
    $('#close').click(function () {
        $('#author').hide(300);
        $('html, body').css({
            overflow: 'auto'
        });

    })
    /************Gallery**********/
    var par = par2 = 0;
    $('#slider .imgBox img:eq(1)').css({
        transform: "scale(1.4)"
    })
    //Right Arrow
    $('.slideArrow:eq(1)').click(function () {
        slide();
        par++;
    })
    //Left arrow
    $('.slideArrow:eq(0)').click(function () {
        slideBack();
        par2++;
    })
    // slideShow();
    // function slideShow() {
    //     slide();
    //     par++;
    //     setTimeout(slideShow, 4000);
    // }

    function slideBack() {
        if (par2 == showImages.length) {
            par2 = 0;
        }
        var help;
        var first = $('#slider img:eq(0)').attr('src');
        var second = $('#slider img:eq(1)').attr('src');
        var third = $('#slider img:eq(2)').attr('src');
        console.log(showImages[par2])

        help = second;
        first = second;
        second = third;
        third = help;

        var url = baseSliderUrl + showImages[par2];

        $('#slider img:eq(2)').attr('src', url);
        $('#slider img:eq(1)').attr('src', second);
        $('#slider img:eq(0)').attr('src', third);
    }

    function slide() {
        if (par == showImages.length) {
            par = 0;
        }
        var help;
        var first = $('#slider img:eq(0)').attr('src');
        var second = $('#slider img:eq(1)').attr('src');
        var third = $('#slider img:eq(2)').attr('src');

        help = second;
        second = first;
        third = help;

        var url = baseSliderUrl + showImages[par];

        $('#slider img:eq(0)').attr('src', url);
        $('#slider img:eq(1)').attr('src', second);
        $('#slider img:eq(2)').attr('src', third);

    }
});



