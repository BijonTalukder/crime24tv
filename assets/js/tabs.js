console.log("JS is working");

document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".sidebar-tabs li");
  const highlight = document.querySelector(".sidebar-tabs-highlight");
  const contentPanels = document.querySelectorAll(".sidebar-tab-panel");

  tabs.forEach((tab, idx) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      highlight.style.left = idx * 50 + "%";

      const tabName = tab.getAttribute("data-tab");
      contentPanels.forEach((panel) => {
        panel.style.display =
          panel.getAttribute("data-content") === tabName ? "block" : "none";
      });
    });
  });
});

