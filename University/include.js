// include.js
function includeHTML() {
    const elements = document.querySelectorAll('[include-html]');
    elements.forEach(async (el) => {
        const file = el.getAttribute('include-html');
        if (file) {
            const res = await fetch(file);
            if (res.ok) {
                el.innerHTML = await res.text();
                el.removeAttribute('include-html');
                includeHTML(); // recursively include inside included files
            } else {
                el.innerHTML = "Page not found.";
            }
        }
    });
}
window.addEventListener('DOMContentLoaded', includeHTML);
  