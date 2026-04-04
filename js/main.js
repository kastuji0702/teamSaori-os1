document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) otherItem.classList.remove("active");
      });
      item.classList.toggle("active");
    });
  });

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
});
