"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("main > section:not(.hero)");
  sections.forEach((el) => el.classList.add("reveal"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
  );

  sections.forEach((el) => observer.observe(el));
});