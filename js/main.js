document.addEventListener("DOMContentLoaded", () => {
  // ===== ハンバーガー =====
  const toggleBtn = document.querySelector(".h-menu");
  const header = document.getElementById("header");

  toggleBtn.addEventListener("click", () => {
    header.classList.toggle("open");
    toggleBtn.classList.toggle("open");
  });

  document.querySelectorAll(".side-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      header.classList.remove("open");
      toggleBtn.classList.remove("open");
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
      threshold: 0.2,
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
          verticalObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
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

          // 連動アニメーション用にGSAPを起動
          if (entry.target.classList.contains("item2")) {
            const img = entry.target.querySelector(".masked-image");
            if (img) {
              const delayStr = window.getComputedStyle(entry.target).transitionDelay;
              const delay = parseFloat(delayStr) || 0;
              gsap.to(img, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.2, ease: "power2.out", delay: delay });
            }
          }

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

  // ===== 高度な文字分割アニメーション（タグ構造保持＆SEO対応版） =====
  function splitTextToChars(el) {
    const originalText = el.textContent || el.innerText;
    el.setAttribute('aria-label', originalText.replace(/\s+/g, ''));

    // HTML属性から1文字あたりの遅延時間（秒）を取得。未指定なら0.5秒
    const step = parseFloat(el.getAttribute('data-char-step')) || 0.2;

    let charIndex = 0;

    function traverse(node) {
      const childNodes = Array.from(node.childNodes);
      childNodes.forEach(child => {
        if (child.nodeType === Node.TEXT_NODE) {
          const text = child.textContent;
          const fragment = document.createDocumentFragment();

          for (const char of text) {
            if (/\S/.test(char)) {
              const span = document.createElement('span');
              span.className = 'char';
              span.setAttribute('aria-hidden', 'true');
              // JS側で計算して直接秒数として付与（SCSSのパースエラーやcalcのバグを防ぐ）
              span.style.setProperty('--delay-offset', `${charIndex * step}s`);
              span.textContent = char;
              charIndex++; // 1文字進める
              fragment.appendChild(span);
            } else {
              fragment.appendChild(document.createTextNode(char));
            }
          }
          child.parentNode.replaceChild(fragment, child);
        } else if (child.nodeType === Node.ELEMENT_NODE && child.className !== "char") {
          traverse(child);
        }
      });
    }

    traverse(el);
  }

  const occasionTargets = document.querySelectorAll(".js-split-occasion");
  occasionTargets.forEach((el) => {
    splitTextToChars(el);
  });
});

