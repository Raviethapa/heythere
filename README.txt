HEY, RAVIE. — REVIEW BUILD v0.3
================================

Files (keep in one folder):
- index.html  : home page (hero, what I do, shelf, notes, how I work, archive, contact)
- about.html  : "A little about me" page (merged from Ravie_A_Little_About_Me_Review.html)
- style.css   : all custom styling, dark + light themes
- script.js   : theme toggle, mega-menu pop-up, mobile menu, archive search, review mode
- REVIEW_NOTES.md : analysis, decisions made, open questions

Stack: HTML, CSS, Bootstrap 5.3.3 (CDN: grid, offcanvas, buttons, colour modes), vanilla JS.
Fonts (Google Fonts CDN): Instrument Serif (display) + Hanken Grotesk (body).

Preview: open index.html in a browser. Internet needed for the CDNs.
Review mode: add ?review to the URL (index.html?review). Every claim that needs
verification gets a dashed amber outline; hover for the reason.

Before publishing:
- Verify every outlined item (credentials, project names, quote source, links).
- Do not use profile.jpeg as a portrait (see REVIEW_NOTES.md). Put your own photo at assets/ravie.jpg.
- Publish only sanitised project examples; no internal company files, employee/customer data, credentials.
- GitHub Pages is public for a public repository.


Review v4 changes: final profile section uses lowercase 'ravie', a large animated orbital circle cycling personality words every 3 seconds (without definitions), a heart after Dehradun, India, and a supportive invitation to connect if feeling low or needing someone to talk to. Social links remain placeholders until real URLs are supplied.

REVIEW V6 — NEW SECTION PAGES
Added standalone pages: values-beliefs.html, a-few-facts.html, random-things.html, this-or-that.html, life-lessons.html, documentaries.html, currently-reading.html, currently-watching.html, notes.html, archive.html. Added collection-pages.css/js. Updated mega-menu destinations in script.js and updated the education wording on the About and home pages. New pages use the existing dark/cream/amber editorial visual language. Current reading/watching pages intentionally have placeholder slots until Ravie provides real titles. Documentary examples are starter recommendations, not claims that Ravie has watched them.

Additional subsection pages added for Notes and Archive: journal.html, ideas-thoughts.html, questions-i-keep.html, observations.html, quotes-i-love.html, changing-my-mind.html, interesting-links.html, saved-articles.html, visuals-wallpapers.html, digital-keepsakes.html, fun-weird-stuff.html.

Information architecture decision: index.html remains the concise homepage/overview; about.html is the full personal story. Avoid copying the full About essay into index.html. The homepage should point to About for the deeper narrative.


FILM CATALOGUE — LOCAL DOUBLE-CLICK USE
Open films-cinema.html by double-clicking it. Keep films-cinema.html, films-cinema.js, films-cinema.css, script.js, style.css, and the other website files together in the same folder. The film page intentionally contains only eight starter titles for now. The large 504-film dataset has been removed. The starter shelf works when opened from your computer. Internet is only needed for optional remote fonts/CDN assets and TMDB poster lookups.

FILM CATALOGUE — SMALL STARTER SHELF
The 504-film dataset has been removed at Ravie’s request. The cinema page currently includes eight starter titles only; the catalogue can be redesigned later.
