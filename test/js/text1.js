// 1. 버튼과 메뉴 요소 가져오기
const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".icon_mobile_open");

// 2. 버튼 클릭 이벤트 리스너 추가
menuBtn.addEventListener("click", () => {
    // 3. 클래스를 토글하여 메뉴 표시/숨김 (CSS에서 transform 또는 display 처리)
    mobileMenu.classList.toggle("active");
});
