"use client";

/** Pulsante per saltare la sequenza d'apertura. */
export function IntroSkip() {
  return (
    <button
      type="button"
      tabIndex={-1}
      className="intro-skip"
      onClick={() => document.documentElement.setAttribute("data-intro-seen", "")}
    >
      Salta intro
    </button>
  );
}
