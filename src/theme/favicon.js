// Keeps the favicon in sync with the *site* theme (data-theme), not just the
// OS preference. <link media="..."> alone follows the OS, so a manual toggle
// would leave the icon behind — applyTheme() calls syncFavicon() on every
// change, and the pre-paint script in index.html mirrors this for first paint.

const SVG_HREF = {
  light: "/favicon-light.svg",
  dark: "/favicon-dark.svg",
};

const PNG_HREF = {
  light: "/favicon-light-32.png",
  dark: "/favicon-dark-32.png",
};

export function syncFavicon(theme) {
  const t = theme === "dark" ? "dark" : "light";
  document.querySelectorAll('link[rel="icon"]').forEach((link) => {
    const type = link.getAttribute("type");
    if (type === "image/svg+xml") link.setAttribute("href", SVG_HREF[t]);
    else if (type === "image/png") link.setAttribute("href", PNG_HREF[t]);
  });
}
