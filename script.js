// Footer year.
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile navigation toggle.
const navToggle = document.getElementById("navToggle");
const mobileNav = document.getElementById("mobileNav");
navToggle.addEventListener("click", () => {
  const open = mobileNav.hasAttribute("hidden");
  if (open) {
    mobileNav.removeAttribute("hidden");
  } else {
    mobileNav.setAttribute("hidden", "");
  }
  navToggle.setAttribute("aria-expanded", String(open));
  navToggle.setAttribute("aria-label", open ? "Menü schließen" : "Menü öffnen");
});
// Close the mobile menu after tapping a link.
mobileNav.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    mobileNav.setAttribute("hidden", "");
    navToggle.setAttribute("aria-expanded", "false");
  })
);

// "Brille aktivieren" — flip the whole page into warm Charlottenburg-Modus.
const arToggle = document.getElementById("arToggle");
const arBadge = document.getElementById("arBadge");
arToggle.addEventListener("click", () => {
  const on = document.body.classList.toggle("ar-on");
  arToggle.setAttribute("aria-pressed", String(on));
  arToggle.textContent = on ? "Brille absetzen" : "Brille aktivieren";
  if (on) {
    arBadge.removeAttribute("hidden");
  } else {
    arBadge.setAttribute("hidden", "");
  }
});

// Waitlist form — no backend; give satisfying in-world feedback.
const signup = document.getElementById("signup");
const signupMsg = document.getElementById("signupMsg");
signup.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email");
  if (!email.value || !email.checkValidity()) {
    signupMsg.textContent = "Bitte eine gültige E-Mail-Adresse eingeben.";
    email.focus();
    return;
  }
  signup.reset();
  signupMsg.textContent =
    "Willkommen. Ihr Platz auf der Warteliste ist gesichert — so exklusiv wie Ihr Blick auf die Welt.";
});
