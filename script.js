const body = document.body;

const langBtn = document.getElementById("langBtn");
const themeBtn = document.getElementById("themeBtn");

const name = document.getElementById("name");
const job = document.getElementById("job");
const bio = document.getElementById("bio");

const langText = langBtn.querySelector("span");
const langIcon = langBtn.querySelector("i");
const themeIcon = themeBtn.querySelector("i");

let arabic = true;
let dark = true;


// Language

langBtn.onclick = function () {

    arabic = !arabic;

    if (arabic) {

        document.documentElement.lang = "ar";
        document.documentElement.dir = "rtl";

        name.textContent = "ايمان محمود العلي";
        job.textContent = "مدرسة لغة عربية";

        bio.textContent =
            " خريجة جامعة حلب ";

        langText.textContent = "English";

    } else {

        document.documentElement.lang = "en";
        document.documentElement.dir = "ltr";

        name.textContent = "Iman Mahmoud Alali";
        job.textContent = "arabic language teacher";

        bio.textContent =
            "Allepo University Graduate";

        langText.textContent = "العربية";
    }
};


// Theme

themeBtn.onclick = function () {

    dark = !dark;

    if (dark) {

        body.classList.remove("light");
        body.classList.add("dark");

        themeIcon.className = "fa-solid fa-moon";

    } else {

        body.classList.remove("dark");
        body.classList.add("light");

        themeIcon.className = "fa-solid fa-sun";
    }
};
