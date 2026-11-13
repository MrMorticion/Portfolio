document.addEventListener("DOMContentLoaded", function() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".menu nav");

    burger.addEventListener("click", function() {
        const isOpen = nav.classList.toggle("open");
        burger.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach(function(link) {
        link.addEventListener("click", function() {
            nav.classList.remove("open");
            burger.setAttribute("aria-expanded", "false");
        });
    });

    const before = document.getElementById("demo-before");
    const after = document.getElementById("demo-after");
    const toggle = document.getElementById("demo-toggle");
    let isFixed = true;

    toggle.addEventListener("click", function() {
        isFixed = !isFixed;
        before.textContent = isFixed ? "ghbdtn" : "привет";
        after.textContent = isFixed ? "привет" : "ghbdtn";
    });
});
