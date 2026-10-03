// =========================================
// Mobile Navbar Toggle
// =========================================
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("nav-open");
    navToggle.classList.toggle("open");
  });

  // Close menu when clicking on a link
  navLinks.addEventListener("click", (e) => {
    if (e.target.tagName === "A" || e.target.closest("a")) {
      navLinks.classList.remove("nav-open");
      navToggle.classList.remove("open");
    }
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove("nav-open");
      navToggle.classList.remove("open");
    }
  });
}

// =========================================
// Smooth Scrolling with Offset
// =========================================
const scrollLinks = document.querySelectorAll('a[href^="#"]');

scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href");
    if (targetId && targetId.length > 1) {
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 75;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  });
});

// =========================================
// Reveal Animations on Scroll
// =========================================
const revealElements = document.querySelectorAll(
  ".card, .hero-content, .about-card, .strength-card, .hobby-card, .contact-card, .quick-contact-box"
);

revealElements.forEach((el) => el.classList.add("reveal-hidden"));

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("reveal-show");
      obs.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
  rootMargin: "0px 0px -40px 0px"
});

revealElements.forEach((el) => observer.observe(el));

// =========================================
// Back to Top Button
// =========================================
const backToTopBtn = document.getElementById("back-to-top");

if (backToTopBtn) {
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

// =========================================
// Footer Year Auto-Update
// =========================================
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// =========================================
// Contact Form Submission (Mailto Handler)
// =========================================
function handleFormSubmit(e) {
  e.preventDefault();
  const name = document.getElementById("sender-name").value.trim();
  const email = document.getElementById("sender-email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  const fullSubject = encodeURIComponent(subject || `Inquiry from ${name}`);
  const fullBody = encodeURIComponent(
    `Hello Nikhil,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n`
  );

  window.location.href = `mailto:meram.nikhil@gmail.com?subject=${fullSubject}&body=${fullBody}`;
}
