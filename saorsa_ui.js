// 웹 메인배너
const swiper1 = new Swiper("#section1 .main_banner", {
    direction: "horizontal",
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    scrollbar: {
        el: ".swiper-scrollbar",
    },
});

// 모바일 메뉴버튼 토글
const open = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".icon_mobile_open");
const close = document.querySelector(".close-btn");

open.addEventListener("click", () => {
    mobileMenu.classList.add("active");
});
close.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
});

// 모바일 메인배너
const swiper2 = new Swiper("#section1 .main_banner_mobile", {
    direction: "horizontal",
    loop: true,
    slidesPerView: 1,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    scrollbar: {
        el: ".swiper-scrollbar",
    },
});
// SECTION4 스와이퍼 웹
const swiper3 = new Swiper(".swiper_s4web", {
    direction: "horizontal",
    loop: true,
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    scrollbar: {
        el: ".swiper-scrollbar",
    },
});

// SECTION4 스와이퍼 모바일
const swiper4 = new Swiper(".swiper_s4mobile", {
    direction: "horizontal",
    loop: true,
    slidesPerView: 2,
    grid: {
        rows: 2,
        fill: "row",
    },
    spaceBetween: 16,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        // hide: true,
    },
});
