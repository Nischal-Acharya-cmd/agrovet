const menu = document.querySelector("#menu");
const nav = document.querySelector("#nav");
menu.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menu.setAttribute("aria-expanded", String(open));
    menu.setAttribute(
        "aria-label",
        open ? "Close navigation" : "Open navigation",
    );
    menu.textContent = open ? "×" : "☰";
});
nav.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
        nav.classList.remove("open");
        menu.setAttribute("aria-expanded", "false");
        menu.setAttribute("aria-label", "Open navigation");
        menu.textContent = "☰";
    }),
);
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("open")) {
        menu.click();
        menu.focus();
    }
});
document.querySelector("#language").addEventListener("click", () => {
    const lang = document.documentElement.lang === "en" ? "ne" : "en";
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-en]").forEach((el) => {
        el.innerHTML = el.dataset[lang];
    });
    const button = document.querySelector("#language");
    button.textContent = lang === "en" ? "नेपाली" : "English";
    button.setAttribute(
        "aria-label",
        lang === "en" ? "Switch to Nepali" : "Switch to English",
    );
});
document.querySelector("#year").textContent = new Date().getFullYear();

// Set the verified business WhatsApp number in international format, e.g. country code + number.
const businessWhatsApp = "9779804366022";
if (/^\d{8,15}$/.test(businessWhatsApp)) {
    const url =
        "https://wa.me/" +
        businessWhatsApp +
        "?text=" +
        encodeURIComponent(
            "Hello Sumit Amit Agrovet, I would like to ask about your products and farm services.",
        );
    document.querySelectorAll(".whatsapp-link").forEach((link) => {
        link.href = url;
        link.hidden = false;
    });
    document.querySelector("#whatsapp-contact").hidden = false;
    const phone = document.querySelector("#contact-phone");
    phone.textContent = "+977 9804366022";
    phone.href = "tel:+" + businessWhatsApp;
}
