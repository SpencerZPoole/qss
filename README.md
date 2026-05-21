# Quick Status Select

Quick Status Select is a Foundry VTT module that adds a search field to the Token HUD status-effect palette so effects and conditions can be filtered quickly.

This repository is a public verification fork of [Jeremiah Verba's Quick Status Select](https://github.com/jeremiahverba/qss). It keeps the original module id, behavior, and MIT license attribution while documenting a locally verified Foundry V14 compatibility build.

## Compatibility

- Verified on Foundry VTT `14.362`
- Runtime test environment: D35E `3.0.2`
- Module version: `2.0.3`
- Expected to remain system-agnostic for systems/modules that preserve Foundry's standard Token HUD status-effect markup

This fork builds on the upstream V13 support work and the prior fork work credited in the module metadata, including Emmi's updates for Foundry v12, Lancer, Pathfinder 2e, and Monk's Little Details.

## Install

Use this manifest URL in Foundry's module installer:

```text
https://github.com/SpencerZPoole/qss/releases/latest/download/module.json
```

Release assets:

- Manifest: https://github.com/SpencerZPoole/qss/releases/latest/download/module.json
- Zip: https://github.com/SpencerZPoole/qss/releases/download/v2.0.3/module.zip

## Usage

1. Enable **Quick Status Select** in your world.
2. Select a token and open the Token HUD.
3. Open the status/effects palette.
4. Type in the filter field to narrow visible statuses by id or localized label.
5. Press Enter to apply the first visible matching status.

## v2.0.3 Compact Filter Row Polish

Changes from `v2.0.2`:

- Removed sticky positioning from the visible filter row so it stays part of the status icon grid instead of behaving like an overlay while filtering.
- Reset the status palette scroll position whenever the filter changes, preventing blank scroll space from appearing above filtered results.
- Preserved the `Search:` label, compact input styling, filtering behavior, clickable icons, and Enter-to-apply behavior.

## v2.0.2 Visible Search Row Fix

Changes from `v2.0.1`:

- Replaced the absolutely positioned quick input with a visible filter row inside the status-effects palette.
- Added a static `Search:` label and `Status` placeholder so the HUD affordance is visible and understandable.
- Anchored the filter row at the top of the status-effects palette while preserving the existing keyboard filtering and Enter-to-apply behavior.

## v2.0.1 Verification Build

Changes from `jeremiahverba/qss` at commit `e594142`:

- Updated module compatibility metadata to verified `14.362`.
- Pointed release metadata at this public fork's GitHub release assets.
- Replaced regex-based matching with plain-text `includes` matching so inputs such as `[` do not throw invalid-regex errors.
- Added defensive guards so the HUD patch exits cleanly if the status palette is missing or already patched.
- Changed the quick filter input to `type="search"`.
- Moved Enter handling from `keypress` to `keydown` and prevents the default form action before clicking the first visible effect.
- Added safer tooltip localization fallback for effects without tooltip data.
- Made the effects-palette focus listener optional so altered HUD layouts do not fail during render.

Validation performed against the local Foundry install:

- `node --check src/scripts/qss.mjs`
- Manifest reference validation for script, style, language, license, manifest, and download paths
- Live Foundry `14.362` Token HUD check: filter input appears, `blind` filters to the blind status, Enter selects the visible result, `[` no longer crashes the HUD, and repeated HUD binding does not duplicate the input
- Local security gate with no QSS findings

## Screenshots

<img src="https://raw.githubusercontent.com/SpencerZPoole/qss/main/qss-empty.png" alt="Image of Quick Status Select" width="400"/>

<img src="https://raw.githubusercontent.com/SpencerZPoole/qss/main/qss-example1.png" alt="Image of Quick Status Select 2" width="400"/>

<img src="https://raw.githubusercontent.com/SpencerZPoole/qss/main/qss-example2.png" alt="Image of Quick Status Select 3" width="400"/>

## Credits and License

Original module work is credited to Jeremiah Verba and the upstream contributors. This fork preserves the existing MIT license file, including its copyright notice.

Created with help from [create-foundry-project](https://gitlab.com/foundry-projects/foundry-pc/create-foundry-project/-/wikis/home).
