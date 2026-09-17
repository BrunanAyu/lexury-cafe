/**
 * Smoothly scrolls the element with the given id into view.
 * Generic DOM utility shared across the single-page navigation (header,
 * footer, and in-page call-to-action buttons).
 */
export function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}
