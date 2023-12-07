// Animation initialization
AOS.init();

let db = [
    {
        category: 'agricultural',
        nameUA: 'Пшениця',
        namePL: 'Pszenica',
        nameEN: 'Wheat',
        nameIT: 'Grano',
        img: 'wheat.webp'
    },
    {
        category: 'agricultural',
        nameUA: 'Кукурудза',
        namePL: 'Kukurydza',
        nameEN: 'Corn',
        nameIT: 'Mais',
        img: 'corn.webp'
    },
    {
        category: 'agricultural',
        nameUA: 'Соняшник',
        namePL: 'Słonecznik',
        nameEN: 'Sunflower',
        nameIT: 'Girasole',
        img: 'sunflower.webp'
    },
    {
        category: 'agricultural',
        nameUA: 'Ріпак',
        namePL: 'Rzepa',
        nameEN: 'Turnip',
        nameIT: 'Rapa',
        img: 'turnip.webp'
    },
    {
        category: 'agricultural',
        nameUA: 'Соя',
        namePL: 'Soja',
        nameEN: 'Soy',
        nameIT: 'Soia',
        img: 'soy.webp'
    },
    {
        category: 'agricultural',
        nameUA: 'Макуха соняшникова',
        namePL: 'Ciasto słonecznikowe',
        nameEN: 'Sunflower cake',
        nameIT: 'Torta di girasole',
        img: 'sunflower-cake.webp'
    },
    {
        category: 'agricultural',
        nameUA: 'Макуха соєва',
        namePL: 'Ciasto sojowe',
        nameEN: 'Soybean cake',
        nameIT: 'Torta di soia',
        img: 'soybean-cake.webp'
    },
    {
        category: 'agricultural',
        nameUA: 'Макуха ріпакова',
        namePL: 'Ciasto rzepakowe',
        nameEN: 'Rapeseed cake',
        nameIT: 'Torta di colza',
        img: 'rapeseed-cake.webp'
    },
    {
        category: 'agricultural',
        nameUA: 'Шрот соняшниковий',
        namePL: 'Posiłek słonecznikowy',
        nameEN: 'Sunflower meal',
        nameIT: 'Pasto di girasole',
        img: 'sunflower-meal.webp'
    },
    {
        category: 'agricultural',
        nameUA: 'Шрот ріпаковий',
        namePL: 'Posiłek rzepakowy',
        nameEN: 'Rapeseed meal',
        nameIT: 'Farina di colza',
        img: 'rapeseed-meal.webp'
    },
    {
        category: 'agricultural',
        nameUA: 'Шрот соєвий',
        namePL: 'Potrawa z soi',
        nameEN: 'Soybean meal',
        nameIT: 'Farina di soia',
        img: 'soybean-meal.webp'
    },
    {
        category: 'agricultural',
        nameUA: 'Жом',
        namePL: 'Miazga',
        nameEN: 'Pulp',
        nameIT: 'Polpa',
        img: 'pulp.webp'
    },
    {
        category: 'agricultural',
        nameUA: 'Олія ріпакова',
        namePL: 'Olej rzepakowy',
        nameEN: 'Rapeseed oil',
        nameIT: 'Olio di colza',
        img: 'rapeseed-oil.webp'
    },
    {
        category: 'agricultural',
        nameUA: 'Олія соняшникова',
        namePL: 'Olej słonecznikowy',
        nameEN: 'Sunflower oil',
        nameIT: 'Olio di semi di girasole',
        img: 'sunflower-oil.webp'
    },
    {
        category: 'agricultural',
        nameUA: 'Олія соєва',
        namePL: 'Olej sojowy',
        nameEN: 'Soybean oil',
        nameIT: 'Olio di semi di soia',
        img: 'soybean-oil.webp'
    },
    {
        category: 'food',
        nameUA: 'Пшениця класова',
        namePL: 'Pszenica klasowa',
        nameEN: 'Class wheat',
        nameIT: 'Grano di classe',
        img: 'wheat.webp'
    },
    {
        category: 'food',
        nameUA: 'Олія соняшникова',
        namePL: 'Olej słonecznikowy',
        nameEN: 'Sunflower oil',
        nameIT: 'Olio di semi di girasole',
        img: 'sunflower-oil.webp'
    },
    {
        category: 'food',
        nameUA: 'Олія ріпакова',
        namePL: 'Olej rzepakowy',
        nameEN: 'Rapeseed oil',
        nameIT: 'Olio di colza',
        img: 'rapeseed-oil.webp'
    },
    {
        category: 'food',
        nameUA: 'Олія соєва',
        namePL: 'Olej sojowy',
        nameEN: 'Soybean oil',
        nameIT: 'Olio di semi di soia',
        img: 'soybean-oil.webp'
    },
    {
        category: 'food',
        nameUA: 'Ріпак харчовий',
        namePL: 'Gwałt jest jadalny',
        nameEN: 'Rape is edible',
        nameIT: 'Lo stupro è commestibile',
        img: 'turnip.webp'
    },
    {
        category: 'food',
        nameUA: 'Цукор',
        namePL: 'Cukier',
        nameEN: 'Sugar',
        nameIT: 'Zucchero',
        img: 'sugar.webp'
    },
    {
        category: 'food',
        nameUA: 'Борошно',
        namePL: 'Mąka',
        nameEN: 'Flour',
        nameIT: 'Farina',
        img: 'flour.webp'
    },
    {
        category: 'food',
        nameUA: 'Висівки',
        namePL: 'Otręby',
        nameEN: 'Bran',
        nameIT: 'Crusca',
        img: 'bran.webp'
    },
    {
        category: 'food',
        nameUA: 'Морожена ягода (малина, порічка)',
        namePL: 'Mrożona jagoda (malina, porzeczka)',
        nameEN: 'Frozen berry (raspberry, currant)',
        nameIT: 'Bacche congelate (lampone, ribes)',
        img: 'frozen-berry.webp'
    },
    {
        category: 'food',
        nameUA: 'Овочі',
        namePL: 'Warzywa',
        nameEN: 'Vegetables',
        nameIT: 'Verdure',
        img: 'vegetables.webp'
    },
    {
        category: 'food',
        nameUA: 'Шрот соєвий',
        namePL: 'Potrawa z soi',
        nameEN: 'Soybean meal',
        nameIT: 'Farina di soia',
        img: 'soybean-meal.webp'
    },
    {
        category: 'food',
        nameUA: 'Фрукти',
        namePL: 'Owoce',
        nameEN: 'Fruits',
        nameIT: 'Frutta',
        img: 'fruits.webp'
    },
    {
        category: 'industrial-products',
        nameUA: 'Гранула паливна (пеллет) клас А1',
        namePL: 'Granulat opałowy (pellet) klasa A1',
        nameEN: 'Fuel granules (pellets) class A1',
        nameIT: 'Granuli di combustibile (pellet) classe A1',
        img: 'fuel-granulesA1.webp'
    },
    {
        category: 'industrial-products',
        nameUA: 'Гранула паливна (пеллет) клас А2',
        namePL: 'Granulat opałowy (pellet) klasa A2',
        nameEN: 'Fuel granules (pellets) class A2',
        nameIT: 'Granuli di combustibile (pellet) classe A2',
        img: 'fuel-granulesA2.webp'
    },
    {
        category: 'industrial-products',
        nameUA: 'Гранула агро 9 (лушпиння соняшника)',
        namePL: 'Granulat agro 9 (łuska słonecznika)',
        nameEN: 'Granule agro 9 (sunflower husk)',
        nameIT: 'Granulo agro 9 (mallo di girasole)',
        img: 'granule-agro9.webp'
    },
    {
        category: 'industrial-products',
        nameUA: 'Дошка (широкий асортимент)',
        namePL: 'Deska (szeroki asortyment)',
        nameEN: 'Board (wide assortment)',
        nameIT: 'Tavola (vasto assortimento)',
        img: 'board.webp'
    },
    {
        category: 'industrial-products',
        nameUA: 'ДСП',
        namePL: 'płyta wiórowa',
        nameEN: 'chipboard',
        nameIT: 'truciolare',
        img: 'chipboard.webp'
    },
    {
        category: 'industrial-products',
        nameUA: 'Фанера',
        namePL: 'Sklejka',
        nameEN: 'Plywood',
        nameIT: 'Compensato',
        img: 'plywood.webp'
    }
];



// window.addEventListener('load', function () {

setTimeout(function () {

    $('.preloader').css('top', '-120vh');
}, 1500)

// });


let rodoWindow = localStorage.getItem('rodoWindow') || 'on';
setTimeout(function () {
    if (rodoWindow == 'on') {
        $('.rodoContainer').css('display', 'flex');
    }
}, 5000)

$('#rodoBtn').click(function () {
    rodoWindow = 'off';
    localStorage.setItem('rodoWindow', rodoWindow);
    $('.rodoContainer').css('display', 'none');
});


$('#moreInfo').click(function () {
    window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
    });
});

$('.nav ul li a').click(function (event) {
    event.preventDefault();

    var target = $(this.hash);
    var offset = 100;


    $('html, body').animate({
        scrollTop: target.offset().top - offset
    }, 500);

    $('#nav').addClass('nav');
    $('#nav').removeClass('navPhone');
    $('#navBtn').addClass('fa-bars');
    $('#navBtn').removeClass('fa-xmark');
    $('#navBtn').css('color', '#333').css('transition', '0');
    $('.navBtn').css('position', 'static');
    navOpen = false;

});


let navOpen = false;
let deg = 0;
$('.navBtn').click(function () {
    deg += 180;
    if (navOpen == false) {
        $('#nav').removeClass('nav');
        $('#nav').addClass('navPhone');
        $('#navBtn').removeClass('fa-bars');
        $('#navBtn').addClass('fa-xmark');
        $('#navBtn').css('color', 'red').css('transform', `rotate(${deg}deg)`);
        navOpen = true;
        $('.navBtn').css('position', 'fixed').css('top', '50px').css('right', '50px');

    } else {
        $('#nav').addClass('nav');
        $('#nav').removeClass('navPhone');
        $('#navBtn').addClass('fa-bars');
        $('#navBtn').removeClass('fa-xmark');
        $('#navBtn').css('color', '#333').css('transition', '0');
        $('.navBtn').css('position', 'static');
        navOpen = false;
    }
});


function navTrigger(navOpen) {
    if (navOpen == false) {
        $('#nav').removeClass('nav');
        $('#nav').addClass('navPhone');
        $('#navBtn').removeClass('fa-bars');
        $('#navBtn').addClass('fa-xmark');
        $('#navBtn').css('color', 'red').css('transform', `rotate(${deg}deg)`);
        navOpen = true;
        $('.navBtn').css('position', 'fixed').css('top', '50px').css('right', '50px');

    } else {
        $('#nav').addClass('nav');
        $('#nav').removeClass('navPhone');
        $('#navBtn').addClass('fa-bars');
        $('#navBtn').removeClass('fa-xmark');
        $('#navBtn').css('color', '#333').css('transition', '0');
        navOpen = false;
    }
}



function showProduct(language) {

    if (language == 'ua') {

        for (let el of db) {
            if (el.category == 'agricultural') {
                $('#agroProduct').append(`<div class="productItem" >

            <div class="productItem__photo" style="background-image: url(./img/products/${el.img});"></div>
            <h3>${el.nameUA}</h3>
        </div>`);
            } else if (el.category == 'food') {
                $('#foodProduct').append(`<div class="productItem">

            <div class="productItem__photo" style="background-image: url(./img/products/${el.img});"></div>
            <h3>${el.nameUA}</h3>
        </div>`);
            } else if (el.category == 'industrial-products') {
                $('#industrialProduct').append(`<div class="productItem">

            <div class="productItem__photo" style="background-image: url(./img/products/${el.img});"></div>
            <h3>${el.nameUA}</h3>
        </div>`);
            }
        }
    } else if (language == 'pl') {

        for (let el of db) {
            if (el.category == 'agricultural') {
                $('#agroProduct').append(`<div class="productItem">

            <div class="productItem__photo" style="background-image: url(./img/products/${el.img});"></div>
            <h3>${el.namePL}</h3>
        </div>`);
            } else if (el.category == 'food') {
                $('#foodProduct').append(`<div class="productItem">

            <div class="productItem__photo" style="background-image: url(./img/products/${el.img});"></div>
            <h3>${el.namePL}</h3>
        </div>`);
            } else if (el.category == 'industrial-products') {
                $('#industrialProduct').append(`<div class="productItem">

            <div class="productItem__photo" style="background-image: url(./img/products/${el.img});"></div>
            <h3>${el.namePL}</h3>
        </div>`);
            }
        }
    } else if (language == 'en') {

        for (let el of db) {

            if (el.category == 'agricultural') {
                $('#agroProduct').append(`<div class="productItem">

            <div class="productItem__photo" style="background-image: url(./img/products/${el.img});"></div>
            <h3>${el.nameEN}</h3>
        </div>`);
            } else if (el.category == 'food') {

                $('#foodProduct').append(`<div class="productItem">

            <div class="productItem__photo" style="background-image: url(./img/products/${el.img});"></div>
            <h3>${el.nameEN}</h3>
        </div>`);
            } else if (el.category == 'industrial-products') {
                $('#industrialProduct').append(`<div class="productItem">

            <div class="productItem__photo" style="background-image: url(./img/products/${el.img});"></div>
            <h3>${el.nameEN}</h3>
        </div>`);
            }
        }
    } else if (language == 'it') {

        for (let el of db) {
            if (el.category == 'agricultural') {
                $('#agroProduct').append(`<div class="productItem">

            <div class="productItem__photo" style="background-image: url(./img/products/${el.img});"></div>
            <h3>${el.nameIT}</h3>
        </div>`);
            } else if (el.category == 'food') {
                $('#foodProduct').append(`<div class="productItem">

            <div class="productItem__photo" style="background-image: url(./img/products/${el.img});"></div>
            <h3>${el.nameIT}</h3>
        </div>`);
            } else if (el.category == 'industrial-products') {
                $('#industrialProduct').append(`<div class="productItem">

            <div class="productItem__photo" style="background-image: url(./img/products/${el.img});"></div>
            <h3>${el.nameIT}</h3>
        </div>`);
            }
        }
    }
    changeLanguage();
}




// $('.productHeader').click(function (e) {
//     let idTarget = (e.target.id).substring(0, ((e.target.id).toString()).indexOf('Header'));
//     $(`#${idTarget}`).slideToggle(500);
// })



$('#currentYear').text(new Date().getFullYear());



let semanticCore = {
    agro: {
        "ua": "Агропродукти",
        "en": "Agricultural products",
        "pl": "Produkt rolny",
        "it": "Prodotti agricoli"
    },
    agro1: {
        "ua": "Агропродукти",
        "en": "Agricultural products",
        "pl": "Produkt rolny",
        "it": "Prodotti agricoli"
    },

    product: {
        "ua": "Харчові продукти",
        "en": "Food products",
        "pl": "Produkty spożywcze",
        "it": "Prodotti alimentari"
    },
    product1: {
        "ua": "Харчові продукти",
        "en": "Food products",
        "pl": "Produkty spożywcze",
        "it": "Prodotti alimentari"
    },
    industrial: {
        "ua": "Промислові продукти",
        "en": "Industrial products",
        "pl": "Produkty przemysłowe",
        "it": "Prodotti industriali"
    },
    industrial1: {
        "ua": "Промислові продукти",
        "en": "Industrial products",
        "pl": "Produkty przemysłowe",
        "it": "Prodotti industriali"
    },
    consult: {
        "ua": "Консалтинг",
        "en": "Consulting",
        "pl": "Konsulting",
        "it": "Consulenza"
    },
    consult1: {
        "ua": "Консалтинг",
        "en": "Consulting",
        "pl": "Konsulting",
        "it": "Consulenza"
    },
    contact: {
        "ua": "Контакти",
        "en": "Contact",
        "pl": "Kontakt",
        "it": "Contatti"

    },
    contact1: {
        "ua": "Контакти",
        "en": "Contact",
        "pl": "Kontakt",
        "it": "Contatti"

    },

    slogan: {
        "ua": "Твій надійний партнер з купівлі та продажу між Україною та країнами Європейського Союзу",
        "en": "Your reliable partner for buying and selling between Ukraine and European Union countries",
        "pl": "Twój niezawodny partner w zakupach i sprzedaży między Ukrainą a krajami Unii Europejskiej",
        "it": "Il tuo affidabile partner per l'acquisto e la vendita tra l'Ucraina e i paesi dell'Unione Europea"
    },
    more: {
        "ua": "Детальніше",
        "en": "More",
        "pl": "Więcej",
        "it": "Maggiori informazioni"
    },
    about: {
        "ua": "Про нас",
        "en": "About Us",
        "pl": "O nas",
        "it": "Chi siamo"
    },
    viktoria: {
        "ua": "Вікторія Тріфан",
        "en": "Viktoria Trifan",
        "pl": "Viktoria Trifan",
        "it": "Viktoria Trifan"
    },

    viktoria1: {
        "ua": "Вікторія Тріфан",
        "en": "Viktoria Trifan",
        "pl": "Viktoria Trifan",
        "it": "Viktoria Trifan"
    },
    head: {
        "ua": "Голова правління",
        "en": "Chairman of the Board",
        "pl": "Przewodniczący Zarządu",
        "it": "Presidente del Consiglio"
    },
    head1: {
        "ua": "Голова правління",
        "en": "Chairman of the Board",
        "pl": "Przewodniczący Zarządu",
        "it": "Presidente del Consiglio"
    },
    aboutText: {
        "ua": "Наше підприємство зареєстровано в Польщі в липні 2017 року, проте я, як засновниця цього підприємства вже 15 років в сфері торгівлі та логістики між Україною та Європою. Ви можете придбати представлені на нашому сайті, а також запропонувати свої товари для продажу, а також отримати консультації, підготовку документів, організацію перевезення.",
        "en": "Our company was registered in Poland in July 2017, but as the founder of this company, I have been in the trading and logistics industry between Ukraine and Europe for 15 years. You can purchase the products presented on our website and also propose your own products for sale. Additionally, we offer consultation services, document preparation, and transportation organization.",
        "pl": "Nasza firma została zarejestrowana w Polsce w lipcu 2017 roku, ale jako założycielka tej firmy mam 15-letnie doświadczenie w branży handlowej i logistycznej pomiędzy Ukrainą a Europą. Możesz zakupić produkty przedstawione na naszej stronie internetowej oraz zaproponować swoje własne produkty do sprzedaży. Oferujemy również usługi konsultacyjne, przygotowywanie dokumentów oraz organizację transportu.",
        "it": "La nostra azienda è stata registrata in Polonia nel luglio del 2017, ma come fondatrice di questa azienda ho operato nel settore del commercio e della logistica tra l'Ucraina e l'Europa per 15 anni. Puoi acquistare i prodotti presentati sul nostro sito web e proporre i tuoi prodotti per la vendita. Offriamo anche servizi di consulenza, preparazione di documenti e organizzazione del trasporto."
    },
    tzov: {
        "ua": "Unique product Товариство з обмеженою відповідальністю",
        "pl": "Unique product Spółka z ograniczoną odpowiedzialnością",
        "en": "Unique product Limited Liability Company",
        "it": "Unique product Società a responsabilità limitata"
    },
    ipn: {
        "ua": "ІПН: 5242836472",
        "pl": "NIP: 5242836472",
        "en": "TIN: 5242836472",
        "it": "P.IVA: 5242836472"
    },
    street: {
        "ua": "вул. Піотрковська, 270",
        "pl": "ul. Piotrkowska 270",
        "en": "Piotrkowska Street 270",
        "it": "Via Piotrkowska 270"

    },
    city: {
        "ua": "Лодзь",
        "pl": "Łódź",
        "en": "Łódź",
        "it": "Łódź"
    },
    consultText1: {
        "ua": "Консультація по експорту/імпорту Україна ЄС",
        "pl": "Konsultacja dotycząca eksportu/importu Ukraina UE",
        "en": "Consultation on Export/Import Ukraine EU",
        "it": "Consulenza sull'esportazione/importazione Ucraina UE"
    },
    consultText2: {
        "ua": "Консультація та супровід поставки",
        "pl": "Konsultacja i wsparcie dostaw",
        "en": "Consultation and Supply Support",
        "it": "Consulenza e supporto alla fornitura"
    },
    consultText3: {
        "ua": "Послуги з організації перевезення",
        "pl": "Usługi organizacji transportu",
        "en": "Transport Organization Services",
        "it": "Servizi di organizzazione dei trasporti"

    },
    consultText4: {
        "ua": "Послуги підготовки документів для експорту/імпорту та організації митного оформлення",
        "pl": "Usługi przygotowywania dokumentów do eksportu/importu oraz organizacji odprawy celnej",
        "en": "Services for Document Preparation for Export/Import and Customs Clearance Organization",
        "it": "Servizi di preparazione documenti per l'esportazione/importazione e organizzazione dello sdoganamento"
    },
    consultText5: {
        "ua": "Курс від засновниці підприємства торгівлі між Україною та Європою",
        "pl": "Kurs od założycielki firmy handlu między Ukrainą a Europą",
        "en": "Course from the founder of the trading company between Ukraine and Europe",
        "it": "Corso dalla fondatrice dell'azienda commerciale tra l'Ucraina e l'Europa"
    },
    additional: {
        "ua": "Детальніше",
        "pl": "Więcej informacji",
        "en": "More details",
        "it": "Ulteriori dettagli"
    },
    salesES: {
        "ua": "Відділ закупки та продажів в ЄС",
        "pl": "Dział zakupów i sprzedaży w UE",
        "en": "EU Procurement and Sales Department",
        "it": "Reparto Acquisti e Vendite nell'UE"

    },
    salesUA: {
        "ua": "Відділ закупки та продажів в Україні",
        "pl": "Dział zakupów i sprzedaży w Ukrainie",
        "en": "Ukraine Procurement and Sales Department",
        "it": "Reparto Acquisti e Vendite in Ucraina"

    },
    salesIT: {
        "ua": "Відділ закупки та продажів в Італії",
        "pl": "Dział zakupów i sprzedaży we Włoszech",
        "en": "Italy Procurement and Sales Department",
        "it": "Reparto Acquisti e Vendite in Italia"
    },
    marin: {
        "ua": "Марін Тріфан",
        "pl": "Marin Trifan",
        "en": "Marin Trifan",
        "it": "Marin Trifan"
    },
    illya: {
        "ua": "Ілля Чигір",
        "pl": "Illya Chigir",
        "en": "Illya Chigir",
        "it": "Illya Chigir"
    },
    marta: {
        "ua": "Марта Когут",
        "pl": "Marta Kogut",
        "en": "Marta Kogut",
        "it": "Marta Kogut"

    },
    anna: {
        "ua": "Анна Дацко",
        "pl": "Anna Dacko",
        "en": "Anna Dacko",
        "it": "Anna Dacko"

    },

    inna: {
        "ua": "Інна Зінченко",
        "pl": "Inna Zinchenko",
        "en": "Inna Zinchenko",
        "it": "Inna Zinchenko"
    },

    right: {
        "ua": "Всі права захищено",
        "pl": "Wszelkie prawa zastrzeżone",
        "en": "All rights reserved",
        "it": "Tutti i diritti riservati"
    },

    develop: {
        "ua": "Розробка сайтів",
        "pl": "Tworzenie stron internetowych",
        "en": "Website development",
        "it": "Sviluppo di siti web"
    },
    rodoHeader: {
        "ua": "Згода на обробку персональних даних третіми сторонами",
        "pl": "Zgoda na przetwarzanie danych osobowych przez podmioty trzecie",
        "en": "Consent to the processing of personal data by third parties",
        "it": "Consenso al trattamento dei dati personali da parte di terzi"
    },
    rodoLocation: {
        "ua": "90-361 Piotrkowska 270, Лодзь, Польща",
        "pl": "90-361 Piotrkowska 270, Łódź, Polska",
        "en": "90-361 Piotrkowska 270, Łódź, Poland",
        "it": "90-361 Piotrkowska 270, Łódź, Polonia"
    },
    rodoPhone: {
        "ua": "Телефон: 0048 537 400 088",
        "pl": "Telefon: 0048 537 400 088",
        "en": "Phone: 0048 537 400 088",
        "it": "Telefono: 0048 537 400 088"
    },
    rodoText: {
        "ua": "Я даю згоду на обробку моїх персональних даних, наданих у цій формі, для комерційних та маркетингових цілей компанією Unique Product sp. z o.o.",
        "pl": "Wyrażam zgodę na przetwarzanie moich danych osobowych podanych w powyższym formularzu w celach handlowych i marketingowych przez Unique Product sp. z o.o.",
        "en": "I consent to the processing of my personal data provided in this form for commercial and marketing purposes by Unique Product sp. z o.o.",
        "it": "Dichiaro il consenso al trattamento dei miei dati personali forniti in questo modulo per scopi commerciali e di marketing da parte di Unique Product sp. z o.o."
    },


}

let allLang = ['en', 'ua', 'pl', 'it'];
let lang = localStorage.getItem('lang') || 'ua';
console.log(lang);

$('#lang').val(lang);

$('#lang').change(function () {
    lang = $('#lang').val();
    localStorage.setItem('lang', lang);
    changeURL();
})
function changeURL() {
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}



function changeLanguage() {
    let hash = (window.location.hash).substring(1);

    location.href = window.location.pathname + `#${lang}`;

    for (let key in semanticCore) {
        document.querySelector('.language-' + key).innerText = semanticCore[key][hash];

    }
}
changeLanguage();
showProduct(lang);