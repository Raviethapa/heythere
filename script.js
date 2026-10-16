// hey, ravie. — interactive site v1.0
// Vanilla JS: theme toggle, mega-menu pop-up, mobile menu, archive search, review mode.
(() => {
  "use strict";

  const root = document.documentElement;
  const THEME_KEY = "ravie-theme";
  const THEME_COLOR = { dark: "#0d0c0b", light: "#f6f1e9" };

  /* ---------- theme ---------- */
  const themeButtons = document.querySelectorAll(".js-theme");
  const metaTheme = document.querySelector('meta[name="theme-color"]');

  function applyTheme(theme, persist) {
    root.setAttribute("data-bs-theme", theme);
    if (metaTheme) metaTheme.setAttribute("content", THEME_COLOR[theme]);
    themeButtons.forEach(btn =>
      btn.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode"));
    if (persist) {
      try { localStorage.setItem(THEME_KEY, theme); } catch (e) { /* storage may be blocked */ }
    }
  }

  applyTheme(root.getAttribute("data-bs-theme") === "light" ? "light" : "dark", false);
  themeButtons.forEach(btn =>
    btn.addEventListener("click", () =>
      applyTheme(root.getAttribute("data-bs-theme") === "dark" ? "light" : "dark", true)));

  /* ---------- shared two-part mega menu (desktop) ---------- */
  const header = document.getElementById("siteHeader");
  const megaPanel = document.getElementById("megaPanel");
  const triggers = Array.from(document.querySelectorAll(".mega-trigger"));
  const canHover = window.matchMedia("(hover: hover) and (pointer: fine)");
  const isDesktop = window.matchMedia("(min-width: 992px)");
  let closeTimer;
  let activeSection = "about";

  const menuContent = {
    about: {
      number: "01", label: "ABOUT", title: "Who’s Ravie?", description: "A curious mind trying to make sense of a complicated world.",
      listLabel: "A LITTLE ABOUT THE PERSON", note: "The story, the beliefs, the odd details, and the things still being figured out.",
      links: [
        ["My story", "about.html", "The person behind the page."],
        ["Values & beliefs", "values-beliefs.html", "The principles I try to live by."],
        ["A few facts", "a-few-facts.html", "Small details, no grand reveal."],
        ["Random things", "random-things.html", "A little unexpected, by design."],
        ["This or that?", "this-or-that.html", "Small choices with suspiciously big implications."],
        ["Life lessons (still learning)", "life-lessons.html", "Notes from a work in progress."]
      ], quoteLabel: "A LINE I KEEP", quote: "A curious mind, a little overthinking, and a lot of unfinished ideas.", quoteNote: "An introduction, not a final answer.", cta: "Read my story", href: "about.html", scene: "about"
    },
    work: {
      number: "02", label: "WHAT I DO", title: "Work, Ideas & Experiments", description: "The serious side, with a few interesting detours.",
      listLabel: "WORK & SIDE QUESTS", note: "Practical systems, ongoing work, skills, and things I want to build next.",
      links: [
        ["Current work", "index.html#work", "The practical things taking up my days."],
        ["Projects & experiments", "index.html#work", "Small ideas becoming useful things."],
        ["Skills & interests", "index.html#practice", "What I use and what I am learning."],
        ["Tools I use", "index.html#practice", "The tools behind the process."],
        ["Things I want to build", "index.html#archive", "An ever-growing list of possibilities."],
        ["Side quests", "index.html#archive", "The interesting detours count, too."]
      ], quoteLabel: "A LINE I KEEP", quote: "Ideas are easy. Execution is a longer story.", quoteNote: "Build, test, revise. Repeat.", cta: "See what I do", href: "index.html#work", scene: "work"
    },
    shelf: {
      number: "03", label: "READING & WATCHING", title: "Stories, Screens & More", description: "Books that stay. Films that linger. And a few other obsessions.",
      listLabel: "THE PERSONAL SHELF", note: "A growing collection of stories, people, places, and ideas worth returning to.",
      links: [
        ["Books & authors", "books-authors.html", "Books to read, authors to discover."],
        ["Films & cinema", "films-cinema.html", "Stories that keep playing after the credits."],
        ["World history", "world-history.html", "The past, with its patterns and complications."],
        ["Poetry & lines", "poetry-lines.html", "Words that say what I could not."],
        ["Documentaries", "documentaries.html", "Real lives, real events, new perspectives."],
        ["Currently reading", "currently-reading.html", "Books currently on the reading desk."],
        ["Currently watching", "currently-watching.html", "Films and series on the screen."]
      ], quoteLabel: "A LINE I KEEP", quote: "Some stories stay with you long after the screen is gone.", quoteNote: "Books, cinema, history, and everything between.", cta: "Explore the shelf", href: "archive.html", scene: "shelf"
    },
    notes: {
      number: "04", label: "NOTES", title: "Thoughts in Progress", description: "Ideas, reflections, questions, and the occasional overthinking spiral.",
      listLabel: "A PLACE FOR UNFINISHED THOUGHTS", note: "Not every thought needs a conclusion. Some just need somewhere to live.",
      links: [
        ["Journal", "journal.html", "The ongoing record of things noticed."],
        ["Ideas & thoughts", "ideas-thoughts.html", "The beginning of something worth exploring."],
        ["Questions I keep", "questions-i-keep.html", "Questions that refuse to leave."],
        ["Observations", "observations.html", "The ordinary, looked at twice."],
        ["Quotes I love", "quotes-i-love.html", "Words worth keeping close."],
        ["Things I change my mind on", "changing-my-mind.html", "A mind is allowed to update."]
      ], quoteLabel: "A LINE I KEEP", quote: "A place for unfinished thoughts and better questions.", quoteNote: "Curiosity does not need to pretend it is certain.", cta: "Browse notes", href: "notes.html", scene: "notes"
    },
    archive: {
      number: "05", label: "ARCHIVE", title: "The Curious Cabinet", description: "A growing collection of everything interesting, useful, and random.",
      listLabel: "COLLECTED ALONG THE WAY", note: "A cabinet for things that do not fit anywhere else—but are too good to lose.",
      links: [
        ["Between the Lines", "poetry-lines.html", "Poetry, passages, cinema, philosophy, and humour."],
        ["Interesting links", "interesting-links.html", "Useful corners of the internet."],
        ["Saved articles", "saved-articles.html", "Things worth reading when there is time."],
        ["Visuals & wallpapers", "visuals-wallpapers.html", "Images and designs worth keeping."],
        ["Digital keepsakes", "digital-keepsakes.html", "Small artefacts from the internet and life."],
        ["Fun & weird stuff", "fun-weird-stuff.html", "The wonderfully unnecessary things."]
      ], quoteLabel: "A LINE I KEEP", quote: "A little bit of everything that did not fit anywhere else.", quoteNote: "The curious cabinet is allowed to be curious.", cta: "Explore the archive", href: "archive.html", scene: "archive"
    }
  };

  const $ = id => document.getElementById(id);
  function renderMega(section) {
    const item = menuContent[section] || menuContent.about;
    activeSection = section;
    const preview = $("megaPreview");
    preview.dataset.scene = item.scene;
    $("megaEyebrow").textContent = `${item.number} / ${item.label}`;
    $("megaTitle").textContent = item.title;
    $("megaDescription").textContent = item.description;
    $("megaListLabel").textContent = item.listLabel;
    $("megaNote").textContent = item.note;
    $("megaLinks").innerHTML = item.links.map(([label, href, previewText]) => `<li><a href="${href}" data-link-preview="${previewText.replace(/&/g,"&amp;").replace(/"/g,"&quot;")}">${label}<span class="arr" aria-hidden="true"></span></a></li>`).join("");
    $("megaQuoteLabel").textContent = item.quoteLabel;
    $("megaQuote").textContent = `“${item.quote}”`;
    $("megaQuoteNote").textContent = item.quoteNote;
    const cta = $("megaCta"); cta.href = item.href; cta.innerHTML = `${item.cta} <span class="arr" aria-hidden="true"></span>`;
    triggers.forEach(trigger => {
      const current = trigger.dataset.section === section;
      trigger.setAttribute("aria-expanded", String(current && !megaPanel.hidden));
      trigger.classList.toggle("is-active", current && !megaPanel.hidden);
    });
    megaPanel.querySelectorAll("[data-link-preview]").forEach(link => {
      link.addEventListener("mouseenter", () => { $("megaNote").textContent = link.dataset.linkPreview; });
      link.addEventListener("focus", () => { $("megaNote").textContent = link.dataset.linkPreview; });
      link.addEventListener("mouseleave", () => { $("megaNote").textContent = item.note; });
      link.addEventListener("blur", () => { $("megaNote").textContent = item.note; });
    });
  }
  function openMega(section) {
    clearTimeout(closeTimer);
    renderMega(section);
    megaPanel.hidden = false;
    triggers.forEach(trigger => trigger.setAttribute("aria-expanded", String(trigger.dataset.section === section)));
    triggers.forEach(trigger => trigger.classList.toggle("is-active", trigger.dataset.section === section));
  }
  function closeMega(returnFocus = false) {
    if (!megaPanel || megaPanel.hidden) return;
    megaPanel.hidden = true;
    triggers.forEach(trigger => { trigger.setAttribute("aria-expanded", "false"); trigger.classList.remove("is-active"); });
    if (returnFocus) {
      const active = triggers.find(trigger => trigger.dataset.section === activeSection);
      if (active) active.focus();
    }
  }
  function scheduleClose() {
    clearTimeout(closeTimer);
    closeTimer = setTimeout(() => closeMega(false), 220);
  }
  triggers.forEach(trigger => {
    trigger.addEventListener("mouseenter", () => { if (canHover.matches && isDesktop.matches) openMega(trigger.dataset.section); });
    trigger.addEventListener("focus", () => { if (isDesktop.matches) openMega(trigger.dataset.section); });
    trigger.addEventListener("click", () => {
      if (!isDesktop.matches) return;
      if (!megaPanel.hidden && activeSection === trigger.dataset.section) closeMega(false);
      else openMega(trigger.dataset.section);
    });
    trigger.addEventListener("keydown", event => {
      if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
        event.preventDefault();
        const next = triggers[(triggers.indexOf(trigger) + (event.key === "ArrowRight" ? 1 : -1) + triggers.length) % triggers.length];
        next.focus();
      }
    });
  });
  if (header) {
    header.addEventListener("mouseenter", () => clearTimeout(closeTimer));
    header.addEventListener("mouseleave", scheduleClose);
    header.addEventListener("focusout", event => {
      if (event.relatedTarget && !header.contains(event.relatedTarget)) scheduleClose();
    });
  }
  document.addEventListener("keydown", event => { if (event.key === "Escape") closeMega(true); });
  document.addEventListener("click", event => { if (header && !header.contains(event.target)) closeMega(false); });
  isDesktop.addEventListener("change", () => { if (!isDesktop.matches) closeMega(false); });
  if (megaPanel) renderMega("about");

  /* ---------- mobile menu (Bootstrap offcanvas) ---------- */
  const mobileMenu = document.getElementById("mobileMenu");
  if (mobileMenu && window.bootstrap) {
    mobileMenu.querySelectorAll("a").forEach(link =>
      link.addEventListener("click", () => {
        const instance = window.bootstrap.Offcanvas.getInstance(mobileMenu);
        if (instance) instance.hide();
      }));
  }

  /* ---------- footer year ---------- */
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  /* ---------- archive search + filters ---------- */
  const search = document.getElementById("archiveSearch");
  const cards = Array.from(document.querySelectorAll(".archive-item"));
  const filters = Array.from(document.querySelectorAll(".filter-btn"));
  const empty = document.getElementById("archiveEmpty");
  const clearBtn = document.getElementById("archiveClear");
  const count = document.getElementById("archiveCount");
  let activeFilter = "all";

  function updateArchive() {
    const query = (search ? search.value : "").trim().toLowerCase();
    let visible = 0;
    cards.forEach(card => {
      const categoryMatch = activeFilter === "all" || card.dataset.category === activeFilter;
      const textMatch = card.textContent.toLowerCase().includes(query);
      const show = categoryMatch && textMatch;
      card.hidden = !show;
      if (show) visible++;
    });
    if (empty) empty.hidden = visible !== 0;
    if (count) count.textContent = String(visible);
  }

  function setFilter(value) {
    activeFilter = value;
    filters.forEach(btn => btn.setAttribute("aria-pressed", String(btn.dataset.filter === value)));
    updateArchive();
  }

  if (cards.length) {
    if (search) search.addEventListener("input", updateArchive);
    filters.forEach(btn => btn.addEventListener("click", () => setFilter(btn.dataset.filter || "all")));
    if (clearBtn) clearBtn.addEventListener("click", () => {
      if (search) { search.value = ""; search.focus(); }
      setFilter("all");
    });
    setFilter("all");
  }

  /* ---------- profile photo: show it only if the file exists ---------- */
  const photo = document.getElementById("profilePhoto");
  const fallback = document.getElementById("avatarFallback");
  if (photo && fallback) {
    const show = () => { photo.hidden = false; fallback.hidden = true; };
    if (photo.complete && photo.naturalWidth > 0) show();
    else photo.addEventListener("load", show);
  }

  /* ---------- review mode: open any page with ?review ---------- */
  if (/[?&]review\b/.test(window.location.search)) document.body.classList.add("review-mode");
})();
