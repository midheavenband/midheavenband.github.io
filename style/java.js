 

const openButton = document.getElementById("open-streaming");
  const closeButton = document.getElementById("close-streaming");
  const overlay = document.getElementById("streaming-overlay");
  const panel = document.getElementById("streaming-panel");

  let previouslyFocusedElement = null;

  function openStreamingPanel() {
    previouslyFocusedElement = document.activeElement;

    overlay.classList.add("is-open");
    overlay.setAttribute("aria-hidden", "false");
    openButton.setAttribute("aria-expanded", "true");

    document.body.style.overflow = "hidden";

    closeButton.focus();
  }

  function closeStreamingPanel() {
    overlay.classList.remove("is-open");
    overlay.setAttribute("aria-hidden", "true");
    openButton.setAttribute("aria-expanded", "false");

    document.body.style.overflow = "";

    if (previouslyFocusedElement) {
      previouslyFocusedElement.focus();
    }
  }

  openButton.addEventListener("click", openStreamingPanel);
  closeButton.addEventListener("click", closeStreamingPanel);

  overlay.addEventListener("click", function (event) {
    if (event.target === overlay) {
      closeStreamingPanel();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (
      event.key === "Escape" &&
      overlay.classList.contains("is-open")
    ) {
      closeStreamingPanel();
    }
  });


 