// -----------------------------------------
// HEAD ANIMATION + TOGGLE (only if exists)
// -----------------------------------------
const head = document.getElementById('head');
const content = document.getElementById('content');

if (head && content) {
  let headOpen = false;

  head.addEventListener('click', () => {
    headOpen = !headOpen;

    if (headOpen) {
      head.classList.add('move-up');
      setTimeout(() => {
        content.classList.add('show');
      }, 500);
    } else {
      head.classList.remove('move-up');
      content.classList.remove('show');
    }
  });
}

// -----------------------------------------
// LOGO CLICK – SLIDE PAGE + TOGGLE LINKS
// -----------------------------------------
const logo = document.getElementById('logoBtn');
const pageWrap = document.getElementById('pageWrap');
const linksPanel = document.getElementById('linksPanel');

if (logo && pageWrap && linksPanel) {
  logo.addEventListener('click', (e) => {
    e.preventDefault();
    pageWrap.classList.toggle('page-down');
    linksPanel.classList.toggle('show');
  });
}

// -----------------------------------------
// FADE-IN ON PAGE LOAD
// -----------------------------------------
// FADE-IN ON PAGE LOAD
window.addEventListener("load", () => {
  document.body.classList.add("fade-in");
});

// -----------------------------------------
// FADE-OUT ON LINK CLICK
// -----------------------------------------
const links = document.querySelectorAll('a[href]');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');

    // Fade only for internal links
    if (href && !href.startsWith('http') && href !== '#') {
      e.preventDefault();

      document.body.classList.remove('fade-in');
      document.body.classList.add('fade-out');

      setTimeout(() => {
        window.location.href = href;
      }, 500); // match CSS transition
    }
  });
});

// -----------------------------------------
// DRAG TO SCROLL CAROUSEL
// -----------------------------------------
const slider = document.querySelector('.album-row');

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
});

slider.addEventListener('mouseup', () => {
  isDown = false;
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2;
  slider.scrollLeft = scrollLeft - walk;
});

// TOUCH
slider.addEventListener('touchstart', (e) => {
  startX = e.touches[0].pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('touchmove', (e) => {
  const x = e.touches[0].pageX - slider.offsetLeft;
  const walk = (x - startX) * 2;
  slider.scrollLeft = scrollLeft - walk;
});
