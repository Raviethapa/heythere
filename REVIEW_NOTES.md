# hey, ravie. — Review notes (v0.3)

## 1. What the izak screenshots teach us (patterns, not content)

| Pattern in izak | What it does | How v0.3 uses it |
|---|---|---|
| Floating pill "dock" nav, centred | Calm, product-like navigation | `.dock` with About / What I do / Reading & watching / Notes / Archive |
| Mega-menu pop-up: preview card + link list + light promo card + footer bar | Shows context before the click | Two panels (What I do, Reading & watching). Preview card text changes as you hover or focus a link |
| Big condensed serif headline, small grotesk body | Editorial confidence, fast scanning | Instrument Serif + Hanken Grotesk |
| Hero: headline top, intro left, 2x2 fact grid + CTAs right | Everything answered above the fold | Same layout using your four "Based in / Studying / Interested in / Learning to" facts |
| Underlined serif link rows with a one-line description | Scannable service list | "What I do" rows, "Notes & ideas" rows |
| Theme toggle in header | Respects reader preference | Dark default, light option, remembered in the browser |
| Language switcher (FR/EN/ES/AR) | Multi-market agency | Not built: would need translated content. Parked as an idea (EN / HI) |

Not copied: izak's name, copy, imagery, blue accent. Their site sells to companies; yours introduces a person. Borrow the structure, keep your own identity.

## 2. Findings in your current files

| # | Finding | Severity | Status in v0.3 |
|---|---|---|---|
| 1 | The About page links `about.css` and `about.js`, which were not in the upload | High | Merged into one `style.css` / `script.js` |
| 2 | About page expects `profile.jpg`; the uploaded file is `profile.jpeg` | Medium | Photo slot now points to `assets/ravie.jpg` and falls back to a monogram |
| 3 | `profile.jpeg` is a quote graphic of a racing driver (lettering on the suit), not a portrait of you. Using it as "Ravie Thapa" misleads visitors and is likely someone else's copyrighted photo | High | Not used. The quote text is kept as a text line (source to confirm) |
| 4 | Credentials on the site (CMA "Group II", NISM "V-A", AMFI ARN, CAT) do not match your stated track (CMA Inter Group 1, NISM X-A). Public claims must be exact | High | Kept as written but outlined in review mode. Confirm each |
| 5 | Labels set at 7-9 px in mono; unreadable on phones, fails accessibility guidance | High | Minimum 13 px, no mono labels |
| 6 | Two different nav systems (`.navbar` on home, `.topbar` on About) | Medium | One header on both pages |
| 7 | Archive count was hard-coded, empty state had no action, filter buttons lacked `type` and ARIA state | Low | Fixed; empty state has a "Clear search" action |
| 8 | Project names (CSC Visit Tracker, Attendance parsing) look like work done for an employer | Medium | Kept, outlined. Confirm you may name them publicly |
| 9 | Template tells: one italic accent word in every heading, ALL-CAPS mono eyebrows, 01/02/03 numbering on lists that are not sequences, cream + serif + green | Design | Removed. Numbers remain only on "Understand / Structure / Build / Review", a true sequence |
| 10 | Placeholder `href="#"` social links and an empty `mailto:` | Medium | Marked in review mode |

## 3. Design decisions made (my call; challenge them)

- **Accent: amber (#f2a54a dark, #a95508 light).** Your quote image is built on a warm light motif ("be the light"). Amber carries that and stays clearly different from izak's blue.
- **Dark first.** Matches the reference and makes the pop-up the memorable moment. Light mode is one click away.
- **One bold place:** the mega-menu pop-up. Everything else stays quiet. The only page-load motion is the three-line headline reveal.
- **No visual testing yet.** I could not open a browser in my environment. HTML structure, anchors, ids and JS syntax were checked; layout, fonts and pop-up spacing still need your eyes. That is the first review task.

## 4. Strategic note (career lens)

The site reads as a personal archive. Your target roles (finance-analytics, compliance, consulting) are only hinted at.

Ranked by ROI:
1. **Keep the archive personal and add a "Work" page with 2 sanitised case studies** (for example GST template QA, attendance parsing). Highest ROI: recruiters get proof, the personality stays.
2. Turn the site into a pure portfolio. Faster to read, but you lose what makes you memorable.
3. Leave it as is. Lowest ROI; it is a nice site nobody can hire from.

Recommendation: do option 1 after this design pass. A hiring manager should find evidence of your finance and analytics work within two clicks.

## 5. Open questions for you

1. Which credentials are correct, with exact wording and dates?
2. Do you have your own photo for `assets/ravie.jpg`? If not, the monogram stays.
3. Is the "be the light you are searching for." line yours, or whose? Needed for attribution.
4. May the project names appear publicly?
5. Which public email and social accounts go live?
6. Amber accent: keep, or try another direction?
7. Pop-up panels: right amount of content, or too much?

## 6. Suggested next passes

1. You review in a browser (`index.html?review`), screenshot anything off, send it here.
2. Fix layout, spacing and font issues from your screenshots.
3. Content pass: credentials, quote, links, email.
4. "Work" page with case studies.
5. Accessibility and performance pass, Open Graph tags, favicon.
6. Deploy to GitHub Pages.

## Weekly challenge

Answer questions 1, 3 and 4 above and send one real screenshot of each page on your phone. Credentials are the one item that can embarrass you in public; clear that before anything else.
