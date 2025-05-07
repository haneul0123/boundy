var swiper = new Swiper(".mb", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,/*4번째 이미지에서 다음 키를 누르면 바로 첫번째 이미지가 나오게 한다*/
});

//  ----------------------main banner ed

//-------------------about6_버튼 클릭시 내용 바뀌기
// 페이지 진입 시 기본 값
window.addEventListener('DOMContentLoaded', function () {
  showContent('A');
});

function showContent(content) {
  var contentA = document.getElementById("contentA");
  var contentB = document.getElementById("contentB");

  // 내용 숨김
  contentA.style.display = "none";
  contentB.style.display = "none";

  // 선택한 내용 보이기
  if (content === "A") {
    contentA.style.display = "block";
  } else if (content === "B") {
    contentB.style.display = "block";
  }
}

//---https://wintmoca.tistory.com/72
//---------about6 ed


// 선생님 소개_모달팝업창
// https://ssimplay.tistory.com/460

var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 5,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  }
});
// --------- program introduce

// -------------------program_review start
let rollingSwiper; // Swiper 슬라이드

// 롤링시작 함수
function PlayRollingSwiper(target) {
  rollingSwiper = new Swiper('.swiper-container', {
    spaceBetween: 0,
    centeredSlides: true,
    speed: 5000,
    autoplay: {
      delay: 1,
    },
    loop: true,
    slidesPerView: 'auto',
    allowTouchMove: false,
    disableOnInteraction: false,
  });
}

// 페이지 로드
window.addEventListener('load', function () {
  PlayRollingSwiper();
});
// -------------------program_review ed
