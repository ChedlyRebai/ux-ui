async function includeHTML() {
  const elements = document.querySelectorAll('[data-include]');

  for (const el of elements) {
    const file = el.getAttribute('data-include');
    const response = await fetch(file);
    el.innerHTML = await response.text();
  }
}

document.addEventListener('DOMContentLoaded', includeHTML);
