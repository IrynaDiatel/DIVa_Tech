"use client";

import { useEffect } from "react";

export default function ScrollObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    const animateElements = document.querySelectorAll(
      ".fade-up, .fade-in, .scale-up",
    );
    animateElements.forEach((el) => observer.observe(el));

    // Cleanup and re-observe on DOM changes (simple mutation observer)
    const mutationObserver = new MutationObserver(() => {
      const newElements = document.querySelectorAll(
        ".fade-up:not(.in-view), .fade-in:not(.in-view), .scale-up:not(.in-view)",
      );
      newElements.forEach((el) => observer.observe(el));
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
}
