document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("toggleSubpages");
  const submenu = document.getElementById("subpages");
  const menuStateKey = "home-submenu-open";

  const isOpen = localStorage.getItem(menuStateKey) === "true";
  if (!isOpen) {
    submenu.classList.add("hidden");
  } else {
    toggle.classList.add("open");
  }

  toggle.addEventListener("click", () => {
    submenu.classList.toggle("hidden");
    const isOpen = !submenu.classList.contains("hidden");
    localStorage.setItem(menuStateKey, isOpen);

    toggle.classList.toggle("open", isOpen);
  });

  // Collapse submenu when Home link clicked (optional, if you want that behavior)
  const homeLink = document.getElementById("homeLink");
  if (homeLink) {
    homeLink.addEventListener("click", () => {
      submenu.classList.add("hidden");
      localStorage.setItem(menuStateKey, false);
      toggle.classList.remove("open");
    });
  }
});
