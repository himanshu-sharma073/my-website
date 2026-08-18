document.addEventListener("DOMContentLoaded", () => {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReducedMotion) return;

  const diagrams = document.querySelectorAll(".diagram-live");
  if (!diagrams.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-active");
        }
      });
    },
    { threshold: 0.25 }
  );

  diagrams.forEach((diagram, index) => {
    diagram.style.setProperty("--stagger", `${index * 0.1}s`);
    observer.observe(diagram);
  });
});
