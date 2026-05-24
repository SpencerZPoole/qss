# Quick Status Select

Quick Status Select adds a search row to Foundry VTT's Token HUD status-effect palette, making it faster to find and apply conditions or effects on a selected token.

This repository is a public compatibility fork of [Jeremiah Verba's Quick Status Select](https://github.com/jeremiahverba/qss). It preserves the original module id, behavior, and MIT license attribution while publishing a Foundry V14 verified build.

**Support:** If this compatibility fork helps your Foundry V14 workflow, donations are optional and support Spencer's compatibility testing, release packaging, and documentation. Upstream author and contributor credit remains below.

[![Sponsor on GitHub](https://img.shields.io/badge/GitHub%20Sponsors-Donate-ea4aaa?style=flat&logo=githubsponsors&logoColor=white)](https://github.com/sponsors/SpencerZPoole) [![Donate with PayPal](https://img.shields.io/badge/PayPal-One--time%20donation-00457C?style=flat&logo=paypal&logoColor=white)](https://paypal.me/mrpooley92)

## Install

Use this manifest URL in Foundry's module installer:

```text
https://github.com/SpencerZPoole/qss/releases/latest/download/module.json
```

Release assets:

- Manifest: https://github.com/SpencerZPoole/qss/releases/latest/download/module.json
- Zip: https://github.com/SpencerZPoole/qss/releases/download/v2.0.3/module.zip

## Compatibility

- Module version: `2.0.3`
- Foundry VTT: minimum `13`, verified `14.362`
- Verified test environment: Foundry `14.362` with D35E `3.0.2`

Quick Status Select is intended to remain system-agnostic for systems and modules that preserve Foundry's standard Token HUD status-effect palette.

## Usage

1. Enable **Quick Status Select** in your world.
2. Select a token and open the Token HUD.
3. Open the status/effects palette.
4. Type in the **Search:** field to filter statuses by id or localized label.
5. Press Enter to apply the first visible matching status, or click any visible icon.

## Changes in This Fork

This V14 verification build keeps the existing QSS experience and focuses on compatibility and polish:

- Verified the module on Foundry VTT `14.362`.
- Replaced regex filtering with plain-text matching, so special characters in the search field cannot trigger invalid-regex errors.
- Restored a visible **Search:** row with a `Status` placeholder in the Token HUD status palette.
- Kept the search row compact and part of the icon grid while filtering, preventing the large blank overlay area that could appear above filtered results.
- Reset the palette scroll position as the filter changes, so matching icons stay anchored below the search row.
- Kept Enter-to-apply and clickable status icons working with the filtered results.

## Screenshots

<img src="https://raw.githubusercontent.com/SpencerZPoole/qss/main/qss-empty.png" alt="Quick Status Select with the status search field empty" width="400"/>

<img src="https://raw.githubusercontent.com/SpencerZPoole/qss/main/qss-example1.png" alt="Quick Status Select filtering status effects" width="400"/>

<img src="https://raw.githubusercontent.com/SpencerZPoole/qss/main/qss-example2.png" alt="Quick Status Select showing a narrowed status list" width="400"/>

## Credits and License

Quick Status Select was originally created by Jeremiah Verba. This fork also builds on compatibility work credited to Emmi in the module metadata.

The module is distributed under the existing MIT license. See `src/LICENSE` for the license text and original copyright notice.

Created with help from [create-foundry-project](https://gitlab.com/foundry-projects/foundry-pc/create-foundry-project/-/wikis/home).

