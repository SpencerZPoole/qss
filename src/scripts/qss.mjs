Hooks.on('renderTokenHUD', /** @param {HTMLFormElement} html */(_app, html) => {
  /** @type {HTMLDivElement} */
  const statusEffects = html.querySelector(".col.right .palette.status-effects");
  if (!statusEffects || statusEffects.querySelector(".qss-quick-filter")) return;
  statusEffects.classList.add("qss-status-effects");

  const qssQuickFilter = document.createElement('label');
  qssQuickFilter.classList.add("qss-quick-filter");

  const qssQuickLabel = document.createElement('span');
  qssQuickLabel.classList.add("qss-quick-label");
  qssQuickLabel.textContent = game.i18n.localize("quick-status-select.TokenHud.quick-input.label");

  const qssQuickInput = document.createElement('input');
  qssQuickInput.type = "search";
  qssQuickInput.placeholder = game.i18n.localize("quick-status-select.TokenHud.quick-input.placeholder");
  qssQuickInput.classList.add("qss-quick-input");
  qssQuickFilter.append(qssQuickLabel, qssQuickInput);
  statusEffects.prepend(qssQuickFilter);

  qssQuickInput.addEventListener('input', () => {
    const term = qssQuickInput.value.trim().toLowerCase();
    /** @type {NodeListOf<HTMLElement>} */
    const effects = statusEffects.querySelectorAll('.effect-control');
    for (const e of effects) {
      const id = e.dataset.statusId?.trim().toLowerCase() ?? "";
      const label = (e.dataset.tooltipText || game.i18n.localize(e.dataset.tooltip ?? ""))?.trim().toLowerCase() ?? "";
      e.hidden = !(id.includes(term) || label.includes(term));
    }
    statusEffects.scrollTop = 0;
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
