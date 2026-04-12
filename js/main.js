document.addEventListener("DOMContentLoaded", () => {
  // ===== ハンバーガー =====
  const toggleBtn = document.querySelector(".toggle-btn");
  const header = document.getElementById("header");
  const mask = document.getElementById("mask");

  toggleBtn.addEventListener("click", () => {
    header.classList.toggle("open");
  });

  // メニュー内リンククリックで閉じる
  const menuLinks = document.querySelectorAll(".side-menu a");

  header.classList.contains("open")

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      header.classList.remove("open");
    });
  });

  // ===== FAQ =====
  $(".faq-question").on("click", function () {
    const item = $(this).closest(".faq-item");
    const answer = item.find(".faq-answer");

    item.toggleClass("active");
    answer.slideToggle(1000);
  });
});
