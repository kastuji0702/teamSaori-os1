document.addEventListener("DOMContentLoaded", () => {
  // ===== ハンバーガー =====
  const toggleBtn = document.querySelector(".toggle-btn");
  const header = document.getElementById("header");

  toggleBtn.addEventListener("click", () => {
    header.classList.toggle("open");
  });

  document.querySelectorAll(".side-menu a").forEach((link) => {
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

  // ===== HERO（文字アニメ）=====
  const targets = document.querySelectorAll(".js-split");
  targets.forEach((el) => {
    let html = el.innerHTML;
    let lines = html.split(/<br\s*\/?>/gi);

    let result = "";

    lines.forEach((line) => {
      let charIndex = 0; // 行ごとにリセット

      line.split("").forEach((char) => {
        if (char.trim() !== "") {
          result += `<span class="char" style="--i:${charIndex}">${char}</span>`;
          charIndex++;
        } else {
          result += char;
        }
      });

      result += "<br>";
    });

    el.innerHTML = result;
  });

  // 👇 スクロールで発火
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-active");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.4,
    },
  );

  targets.forEach((el) => observer.observe(el));

  // ===== H2 縦（ふわっと表示）=====
  const verticalTargets = document.querySelectorAll(".vertical-title");

  const verticalObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-show");
          verticalObserver.unobserve(entry.target); // ←一回だけ発火
        }
      });
    },
    {
      threshold: 0.3,
    },
  );

  verticalTargets.forEach((el) => verticalObserver.observe(el));

  // ===== h2 横（ふわっと表示）=====
  const fadeTargets = document.querySelectorAll(".js-fadeUp");

  const fadeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-active");
          fadeObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: "0px 0px -10% 0px",
    },
  );

  fadeTargets.forEach((el) => fadeObserver.observe(el));

  // ===== Occasion img（しゅっと表示）=====
  const imgTargets = document.querySelectorAll(".img-occasion");

  const imgObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-show");
        }
      });
    },
    {
      threshold: 0,
      rootMargin: "0px 0px -10% 0px",
    },
  );
});
