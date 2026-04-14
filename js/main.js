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
  // $(".js-split").each(function () {
  //   let html = $(this).html();
  //   let lines = html.split(/<br\s*\/?>/gi);

  //   let result = "";
  //   let count = 0;

  //   lines.forEach((line, lineIndex) => {
  //     line.split("").forEach((char) => {
  //       if (char.trim() !== "") {
  //         result += `<span class="char" style="--i:${count}">${char}</span>`;
  //         count++;
  //       } else {
  //         result += char;
  //       }
  //     });

  //     if (lineIndex !== lines.length - 1) {
  //       result += "<br>";
  //       count += 5;
  //     }
  //   });

  //   $(this).html(result);

  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add("is-active");
  //         observer.unobserve(entry.target);
  //       }
  //     });
  //   }, {
  //     threshold: 0.3,
  //   });

  //   observer.observe(this);
  // });

  //1行ごとに表示
  // $(".js-split").each(function () {
  //   let html = $(this).html();
  //   let lines = html.split(/<br\s*\/?>/gi);

  //   let result = "";

  //   lines.forEach((line, lineIndex) => {
  //     line.split("").forEach((char) => {
  //       if (char.trim() !== "") {
  //         result += `<span class="char" style="--i:${lineIndex}">${char}</span>`;
  //       } else {
  //         result += char;
  //       }
  //     });

  //     if (lineIndex !== lines.length - 1) {
  //       result += "<br>";
  //     }
  //   });

  //   $(this).html(result);

  //   const splitTargets = document.querySelectorAll(".js-split");

  //   const splitObserver = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           entry.target.classList.add("is-active");
  //           splitObserver.unobserve(entry.target);
  //         }
  //       });
  //     },
  //     {
  //       threshold: 0.3,
  //     },
  //   );

  //   splitTargets.forEach((el) => splitObserver.observe(el));
  // });

  //5行まとめて表示
  $(".js-split").each(function () {
    let html = $(this).html();
    let lines = html.split(/<br\s*\/?>/gi);

    let result = "";

    lines.forEach((line, lineIndex) => {
      line.split("").forEach((char) => {
        if (char.trim() !== "") {
          result += `<span class="char" style="--i:0">${char}</span>`;
        } else {
          result += char;
        }
      });

      if (lineIndex !== lines.length - 1) {
        result += "<br>";
      }
    });

    $(this).html(result);

    const splitTargets = document.querySelectorAll(".js-split");

    const splitObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-active");
            splitObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.3,
      },
    );

    splitTargets.forEach((el) => splitObserver.observe(el));
  });

  // ===== MENU（ふわっと表示）=====
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
});
