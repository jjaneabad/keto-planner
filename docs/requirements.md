# Keto Planner — Requirements Document

**Version:** 1.3  
**Date:** May 1, 2026  
**Status:** Draft

---

## 1. Purpose

A single-page app to help the user reduce body fat through a ketogenic diet. The tool combines education, planning, and daily guidance in one place.

## 2. Target User

Single user, no authentication needed. No dietary restrictions. Focus on simplicity and daily usability. Primary device: iPhone (mobile-first).

## 3. Structure

Three tabs: **Learn**, **Plan**, **Today**.

---

## 4. Tab 1 — Learn

Centralizes all knowledge in one place with expandable/collapsible sections.

### 4.1 Overview Section

- What ketosis is, explained in 3 sentences max
- Simple two-column visual: **Eat This** vs. **Avoid This**
- How fat loss works under keto (simple terms, no jargon)
- Special topic: keto and lipedema connection

### 4.2 Research Section

- Summaries of key studies (including PMC article: PMC10748777 on keto and lipedema)
- Typical timelines: when to expect body composition changes
- Common myths vs. what the evidence actually says

### 4.3 Design Notes

- All content is static (no user input on this tab)
- Sections are collapsible — user reads what they need, skips the rest
- Tone: friendly, direct, no medical jargon

---

## 5. Tab 2 — Plan

The core workflow tab. User plans the week and generates shopping lists. No progress tracking — that lives in external apps.

### 5.1 Weekly Meal Grid

- 7-day × 3-meal grid (breakfast, lunch, dinner)
- Each cell shows: meal name + computed macros (fat / protein / net carbs) — calculated at runtime from nutrition database
- Meals can be swapped from a built-in recipe bank
- Two ways to generate a plan:
  - **Offline:** auto-generate from built-in recipe bank (always available)
  - **Claude AI:** "Generate with Claude" button appears only when API key is configured. Claude builds a personalized plan with more variety and smarter combinations (see Section 8)

### 5.2 Daily Drill-Down

- Tapping a day in the grid expands it to show full meal details
- Each meal shows: ingredients with quantities in grams, computed macros, prep time
- This replaces the need for a separate "daily" tab within planning

### 5.3 Shopping List (Feature, Not Tab)

- Button: "Generate Shopping List" from the current week's plan
- Groups items by category: proteins, vegetables, dairy, fats/oils, other
- Checkboxes for use while shopping
- Shows quantities summed across all meals (in grams)

### 5.4 Design Notes

- The weekly grid is the landing view for this tab
- Shopping list appears as a slide-out panel or modal, not a separate page
- If planned data is lost, user simply regenerates — no big deal

---

## 6. Tab 3 — Today

Focused, distraction-free view of what to eat right now.

### 6.1 Today's Meals

- Shows breakfast, lunch, and dinner for the current day
- Each meal pulled from the weekly plan

### 6.2 Options Per Meal

- 2–3 alternative options per meal slot
- User can tap to swap without affecting the rest of the week
- Alternatives stay within similar macro targets

### 6.3 Macro Summary

- Daily total: fat / protein / net carbs / calories (computed from nutrition database)
- Simple visual (progress bar or pie chart)
- Color coding: green = on target, yellow = close, red = off track

### 6.4 Design Notes

- This tab is optimized for mobile-first use (quick glance in the kitchen)
- Minimal scrolling — everything visible in one screen if possible
- Swaps made here update the weekly plan automatically

---

## 7. Data & Storage

### 7.1 Session Persistence

- **LocalStorage** for keeping the current meal plan alive between sessions
- Stores: current weekly meal plan, shopping list checked state, API key (if configured)
- No weight/progress data — tracked in external apps

### 7.2 Backup & Restore

- **Export button**: downloads current plan as a JSON file to iPhone Files app (syncs via iCloud automatically)
- **Import button**: loads a previously exported JSON file to restore a plan
- This is the user's manual backup — simple and reliable

### 7.3 Data Loss Policy

- If LocalStorage is cleared (Safari reset, phone wipe), data is gone unless exported
- This is acceptable — user can regenerate a new plan easily

---

## 8. Recipe Sources (Hybrid Approach)

The app supports two recipe sources. The built-in bank works offline with zero setup. Claude AI adds intelligence and variety when an API key is provided.

### 8.1 Nutrition Database

A single JSON object mapping ingredient keys to per-100g macros. This is the single source of truth for all nutritional calculations.

```json
{
  "eggs": { "fat": 11.0, "protein": 13.0, "net_carbs": 1.1, "calories": 155, "source": "USDA" },
  "bacon": { "fat": 41.8, "protein": 11.6, "net_carbs": 0.7, "calories": 417, "source": "USDA" },
  "avocado": { "fat": 14.7, "protein": 2.0, "net_carbs": 1.8, "calories": 160, "source": "USDA" }
}
```

- All values are per 100g
- `source` field for verifiability (e.g., "USDA" = USDA FoodData Central)
- Ingredient keys use a controlled vocabulary — recipe `item` fields must exactly match a key here
- Covers every ingredient used in the built-in recipe bank
- Claude-generated recipes must also use keys from this database (prompt enforces this)

### 8.2 Recipe Schema

Recipes contain no macros — all nutritional data is computed at runtime from the nutrition database.

```json
{
  "id": "eggs_bacon_avocado",
  "name": "Eggs, Bacon & Avocado Plate",
  "meal": "breakfast",
  "servings": 1,
  "prep_minutes": 15,
  "ingredients": [
    { "item": "eggs", "qty_g": 150, "category": "protein", "note": "about 3 large" },
    { "item": "bacon", "qty_g": 60, "category": "protein" },
    { "item": "avocado", "qty_g": 80, "category": "vegetable" }
  ]
}
```

- `item`: must match a key in the nutrition database
- `qty_g`: quantity in grams (always grams, no other units)
- `category`: shopping aisle grouping (protein, vegetable, dairy, fats_oils, other)
- `note`: optional human-friendly description ("about 3 large", "half medium")

### 8.3 Macro Computation (Runtime)

The app computes all macros dynamically:

- **Per ingredient:** `(qty_g / 100) × macro_per_100g`
- **Per meal:** sum of all ingredient macros
- **Per day:** sum of all meal macros
- **Per week:** sum of all day macros
- **Shopping list quantities:** sum of `qty_g` across the week, grouped by `item`

This means macros are always verifiable — the user can check the nutrition database values against USDA and see exactly how the totals are derived.

### 8.4 Built-in Recipe Bank (Offline Baseline)

- Hardcoded set of keto-friendly recipes using the schema above
- Categorized by meal type (breakfast / lunch / dinner)
- Minimum 10 recipes per meal type for variety
- Used for offline plan generation and manual meal swaps

### 8.5 Claude AI Integration (Optional Enhancement)

- **Activation:** only available when user has entered an API key in Settings
- **"Generate with Claude" button** in Plan tab: sends a prompt to Claude API requesting a structured weekly meal plan
- Claude returns a JSON object matching the recipe schema above
- **Prompt constraints:** Claude must only use ingredient keys that exist in the nutrition database. The prompt includes the list of valid keys.
- The app parses and displays it in the weekly grid like any other plan
- **Shopping list** is generated locally from whatever plan is active (built-in or Claude-generated)

### 8.6 Settings Area

- Simple settings panel (accessible from a gear icon or similar)
- **API Key field:** enter, update, or delete Anthropic API key
- Key is stored in LocalStorage only — never in source code
- When key is present: "Generate with Claude" button appears in Plan tab
- When key is absent: button is hidden, app works fully offline with recipe bank
- **Security note:** for personal use only. Key lives in browser storage on the user's device. Acceptable risk for a single-user personal tool.

---

## 9. Out of Scope (v1)

- User accounts / authentication
- Custom recipe creation
- Calorie counting beyond macros
- Integration with fitness trackers or weight-tracking apps
- Grocery delivery integration
- Multi-user / family planning
- Cloud sync (Google Drive, etc.) — manual export/import is sufficient
- Progress tracking (weight, body fat, trends)

---

## 10. Technical Notes

- **Hosting:** GitHub Pages (static site, free)
- **Format:** Single HTML file (HTML + CSS + JS bundled together)
- **PWA manifest:** Add-to-home-screen support for iPhone, home screen icon
- **Storage:** Browser LocalStorage for session persistence + API key
- **Styling:** Mobile-first responsive design, optimized for iPhone Safari
- **Dependencies:** None — vanilla HTML/CSS/JS, or single-file React if UI complexity warrants it
- **External API call (optional):** Anthropic Messages API (claude-sonnet-4-20250514) for plan generation. Only called when user has configured an API key and taps "Generate with Claude". All other features work offline.

---

## 11. Reference Material

- PMC10748777: Ketogenic diet and lipedema — https://pmc.ncbi.nlm.nih.gov/articles/PMC10748777/
- To be expanded with additional cited studies during content creation phase
