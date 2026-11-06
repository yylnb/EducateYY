const articleToc = document.querySelector(".article-toc");
const mobileLayout = window.matchMedia("(max-width: 860px)");

if (articleToc) {
  const updateToc = () => {
    articleToc.open = !mobileLayout.matches;
  };

  updateToc();
  mobileLayout.addEventListener("change", updateToc);
}

const motionDemos = document.querySelectorAll(".motion-demo");

if ("IntersectionObserver" in window) {
  const motionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("is-visible", entry.isIntersecting);
      });
    },
    { rootMargin: "80px" },
  );

  motionDemos.forEach((demo) => motionObserver.observe(demo));
} else {
  motionDemos.forEach((demo) => demo.classList.add("is-visible"));
}

const motionToggle = document.querySelector(".motion-toggle");
const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");

if (motionToggle) {
  const updateMotionToggle = () => {
    motionToggle.hidden = motionPreference.matches;
  };

  motionToggle.addEventListener("click", () => {
    const paused = document.body.classList.toggle("demos-paused");
    motionToggle.setAttribute("aria-pressed", String(paused));
    motionToggle.textContent = paused ? "继续动画" : "暂停动画";
  });

  updateMotionToggle();
  motionPreference.addEventListener("change", updateMotionToggle);
}

const canvas = document.querySelector("#hero-shader");
const art = canvas?.closest(".hero-art");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (canvas && art && !reducedMotion && navigator.gpu) {
  let shader;
  let pageIsLeaving = false;

  window.addEventListener(
    "pagehide",
    () => {
      pageIsLeaving = true;
      shader?.destroy();
    },
    { once: true },
  );

  try {
    const { createShader } = await import("shaders/js");

    shader = await createShader(
      canvas,
      {
        components: [
          {
            type: "DotGrid",
            props: {
              color: "#2854d8",
              density: 34,
              dotSize: 0.2,
              offset: 0.5,
              speed: 0.035,
              speedVariance: 0.12,
              twinkle: 0,
            },
          },
        ],
      },
      {
        disableTelemetry: true,
        onReady: () => {
          art.classList.remove("shader-unavailable");
          art.classList.add("shader-ready");
        },
        onError: () => {
          art.classList.remove("shader-ready");
          art.classList.add("shader-unavailable");
        },
      },
    );

    if (pageIsLeaving) shader?.destroy();
  } catch {
    art.classList.add("shader-unavailable");
  }
}
