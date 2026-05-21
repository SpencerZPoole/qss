Hooks.on('renderTokenHUD', /** @param {HTMLFormElement} html */(_app, html) => {
  /** @type {HTMLDivElement} */
  const statusEffects = html.querySelector(".col.right .palette.status-effects");
  if (!statusEffects || statusEffects.querySelector(".qss-quick-input")) return;

  const qssQuickInput = document.createElement('input')
  qssQuickInput.type = "search";
  qssQuickInput.placeholder = game.i18n.localize("quick-status-select.TokenHud.quick-input.placeholder");
  qssQuickInput.classList.add("qss-quick-input");
  statusEffects.prepend(qssQuickInput);

  qssQuickInput.addEventListener('input', () => {
    const term = qssQuickInput.value.trim().toLowerCase();
    /** @type {NodeListOf<HTMLElement>} */
    const effects = statusEffects.querySelectorAll('.effect-control');
    for (const e of effects) {
      const id = e.dataset.statusId?.trim().toLowerCase() ?? "";
      const label = (e.dataset.tooltipText || game.i18n.localize(e.dataset.tooltip ?? ""))?.trim().toLowerCase() ?? "";
      e.hidden = !(id.includes(term) || label.includes(term))
    }
  });

  qssQuickInput.addEventListener('keydown', event => {
    debug('got keydown:', event.key, game.qssSearchTerm);
    if (event.key === 'Enter' && qssQuickInput.value.trim()) {
      event.preventDefault();
      /** @type {NodeListOf<HTMLElement>} */
      const effects = statusEffects.querySelectorAll('.effect-control');
      for (const effect of effects) {
        if (!effect.hidden) {
          effect.click();
          break;
        }
      }
    }
  });

  html
    .querySelector("button[data-palette='effects']")
    ?.addEventListener('mouseup', () => setTimeout(() => qssQuickInput.focus(), 0));
});

// Debug logging helper
export function debug(msg, ...args) {
  if (!game.user?.isGM || !foundry.utils.getProperty(CONFIG, "debug.qss")) return;
  console.debug(`quick-status-select | ${msg}`, ...args);
}
