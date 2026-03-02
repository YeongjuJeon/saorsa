var swiper = new Swiper(".mySwiper", {
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
});
