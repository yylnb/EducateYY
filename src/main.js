const articleToc = document.querySelector(".article-toc");
const mobileLayout = window.matchMedia("(max-width: 860px)");

if (articleToc) {
  const updateToc = () => {
    articleToc.open = !mobileLayout.matches;
  };

  updateToc();
  mobileLayout.addEventListener("change", updateToc);
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
