export function knowMode() {
  const mode = localStorage.getItem("mode");
  if (mode) {
    return mode === "dark";
  }
  const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  localStorage.setItem("mode", isDark ? "dark" : "light");
  return isDark;
}

export function setMode(mode) {
  localStorage.setItem("mode", mode);
}
