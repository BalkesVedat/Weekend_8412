/* ==================================================
   SAYFA YÜKLENDİĞİNDE
   ================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        menu();

        counter();

        changeTitle();

        helloButton();

        form();

        setYear();

    }
);


/* ==================================================
   MOBİL MENÜ
   ================================================== */

function menu() {

    const button =
        document.querySelector("#menuButton");

    const nav =
        document.querySelector("#navMenu");


    if (!button || !nav) {
        return;
    }


    button.addEventListener(
        "click",
        function () {

            nav.classList.toggle("open");

        }
    );

}


/* ==================================================
   SAYAÇ
   ================================================== */

function counter() {

    const number =
        document.querySelector("#counter");

    const increase =
        document.querySelector("#increase");

    const decrease =
        document.querySelector("#decrease");

    const reset =
        document.querySelector("#reset");


    if (
        !number ||
        !increase ||
        !decrease ||
        !reset
    ) {
        return;
    }


    let value = 0;


    increase.addEventListener(
        "click",
        function () {

            value++;

            number.textContent =
                value;

        }
    );


    decrease.addEventListener(
        "click",
        function () {

            value--;

            number.textContent =
                value;

        }
    );


    reset.addEventListener(
        "click",
        function () {

            value = 0;

            number.textContent =
                value;

        }
    );

}


/* ==================================================
   DOM ÖRNEĞİ
   ================================================== */

function changeTitle() {

    const button =
        document.querySelector("#changeTitle");

    const title =
        document.querySelector("#baslik");


    if (!button || !title) {
        return;
    }


    button.addEventListener(
        "click",
        function () {

            title.textContent =
                "Başlık JavaScript ile değişti!";

        }
    );

}


/* ==================================================
   EVENT ÖRNEĞİ
   ================================================== */

function helloButton() {

    const button =
        document.querySelector("#helloButton");

    const message =
        document.querySelector("#message");


    if (!button || !message) {
        return;
    }


    button.addEventListener(
        "click",
        function () {

            message.textContent =
                "Merhaba! Butona tıkladın.";

        }
    );

}


/* ==================================================
   FORM
   ================================================== */

function form() {

    const form =
        document.querySelector("#nameForm");

    const input =
        document.querySelector("#name");

    const message =
        document.querySelector("#formMessage");


    if (
        !form ||
        !input ||
        !message
    ) {
        return;
    }


    form.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                input.value.trim();


            if (name === "") {

                message.textContent =
                    "Lütfen adınızı yazın.";

                return;
            }


            message.textContent =
                "Merhaba " + name + "!";


            input.value = "";

        }
    );

}


/* ==================================================
   FOOTER YILI
   ================================================== */

function setYear() {

    const year =
        document.querySelector("#year");


    if (!year) {
        return;
    }


    year.textContent =
        new Date().getFullYear();

}