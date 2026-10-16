/* Films & cinema v0.4 — local viewing log + optional TMDB metadata/posters. */
(() => {
  "use strict";
  const grid = document.getElementById("filmGrid");
  const search = document.getElementById("filmSearch");
  const genreFilters = [...document.querySelectorAll("[data-genre]")];
  const statusFilters = [...document.querySelectorAll("[data-status-filter]")];
  const empty = document.getElementById("filmEmpty");
  const clear = document.getElementById("clearFilmFilters");
  const count = document.getElementById("filmCount");
  const results = document.getElementById("resultsLabel");
  const savedCount = document.getElementById("savedCount");
  const settings = document.getElementById("tmdbSettings");
  const tmdbForm = document.getElementById("tmdbForm");
  const tmdbKeyInput = document.getElementById("tmdbKey");
  const tmdbMessage = document.getElementById("tmdbMessage");
  const TMDB_KEY_STORAGE = "ravie-tmdb-api-key";
  const STATUS_KEY = "ravie-film-statuses-v2";
  const RATING_KEY = "ravie-film-ratings-v2";
  const statusNames = { watching: "Watching", watched: "Watched", "will-watch": "Will watch", "in-list": "In list" };
  const starterDetails = {
    "Interstellar": { colour:"space", tmdb:157336 },
    "3 Idiots": { colour:"campus", tmdb:20453 },
    "The Pursuit of Happyness": { colour:"hope", tmdb:1402 },
    "The Theory of Everything": { colour:"theory", tmdb:266856 },
    "12 Angry Men": { colour:"jury", tmdb:389 },
    "The Shawshank Redemption": { colour:"shawshank", tmdb:278 },
    "The Truman Show": { colour:"truman", tmdb:37165 },
    "Life Is Beautiful": { colour:"beautiful", tmdb:637 }
  };
  // A deliberately small starter shelf. Add titles here later as the collection grows.
  // Keeping this data in the page script means it works when films-cinema.html is opened directly.
  const catalogue = [
    { id: "interstellar", title: "Interstellar", year: 2014, genres: "Science Fiction, Drama", director: "Christopher Nolan", language: "English", country: "United States", notes: "A journey through time, distance, love, and human survival." },
    { id: "three-idiots", title: "3 Idiots", year: 2009, genres: "Comedy, Drama", director: "Rajkumar Hirani", language: "Hindi", country: "India", notes: "Friendship, learning, and questioning the pressure to succeed." },
    { id: "pursuit-of-happyness", title: "The Pursuit of Happyness", year: 2006, genres: "Biography, Drama", director: "Gabriele Muccino", language: "English", country: "United States", notes: "Persistence, parenthood, and hope through difficult circumstances." },
    { id: "theory-of-everything", title: "The Theory of Everything", year: 2014, genres: "Biography, Drama", director: "James Marsh", language: "English", country: "United Kingdom", notes: "A biographical story about Stephen Hawking, relationships, and discovery." },
    { id: "12-angry-men", title: "12 Angry Men", year: 1957, genres: "Drama, Crime", director: "Sidney Lumet", language: "English", country: "United States", notes: "Reasoning, bias, responsibility, and the value of careful disagreement." },
    { id: "shawshank-redemption", title: "The Shawshank Redemption", year: 1994, genres: "Drama", director: "Frank Darabont", language: "English", country: "United States", notes: "Hope and dignity in the face of confinement and injustice." },
    { id: "truman-show", title: "The Truman Show", year: 1998, genres: "Drama, Comedy, Science Fiction", director: "Peter Weir", language: "English", country: "United States", notes: "Reality, media, privacy, and the courage to question what feels normal." },
    { id: "life-is-beautiful", title: "Life Is Beautiful", year: 1997, genres: "Comedy, Drama, Romance", director: "Roberto Benigni", language: "Italian", country: "Italy", notes: "Love, imagination, and the ways people try to protect one another." }
  ];
  const films = catalogue.map((entry, index) => {
    const title = String(entry.title || "Untitled film").trim();
    const genres = String(entry.genres || "").split(/[;,]/).map(g => g.trim()).filter(Boolean);
    const details = starterDetails[title] || {};
    return {
      id: String(entry.id || `film-${index + 1}`), title,
      year: Number(entry.year) || "Year unknown", genres,
      theme: `${entry.notes || ""} ${entry.director || ""} ${entry.language || ""} ${entry.country || ""} ${entry.format || ""}`.toLowerCase(),
      desc: String(entry.notes || "A title to explore and add to your personal cinema notebook."),
      director: String(entry.director || ""), language: String(entry.language || ""), country: String(entry.country || ""),
      format: String(entry.format || "Film"), colour: details.colour || "generic", tmdb: details.tmdb,
      poster: "", tmdbScore: null
    };
  });
  let activeGenre = "all";
  let activeStatus = "all";
  let statuses = readStore(STATUS_KEY, {});
  let ratings = readStore(RATING_KEY, {});
  let tmdbKey = readStore(TMDB_KEY_STORAGE, "");

  function readStore(key, fallback) { try { const v = JSON.parse(localStorage.getItem(key)); return v ?? fallback; } catch (_) { return fallback; } }
  function writeStore(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); } catch (_) {} }
  function escapeHTML(value) { return String(value ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c])); }
  function posterMarkup(film) {
    if (film.poster) return `<img class="real-poster" src="${escapeHTML(film.poster)}" alt="${escapeHTML(film.title)} poster" loading="lazy" referrerpolicy="no-referrer"><span class="real-poster-shade" aria-hidden="true"></span>`;
    const posterTitles = {interstellar:"INTER<br>STELLAR","3-idiots":"3<br>IDIOTS","pursuit-happyness":"THE<br>PURSUIT OF<br>HAPPYNESS","theory-everything":"THE THEORY<br>OF<br>EVERYTHING","12-angry-men":"12<br>ANGRY<br>MEN",shawshank:"THE<br>SHAWSHANK<br>REDEMPTION","truman-show":"THE<br>TRUMAN<br>SHOW","life-is-beautiful":"LIFE IS<br>BEAUTIFUL"};
    const art = {interstellar:"◉","3-idiots":"∿","pursuit-happyness":"↗","theory-everything":"∞","12-angry-men":"12",shawshank:"↗","truman-show":"◌","life-is-beautiful":"✳"};
    const kickers = {interstellar:"A journey beyond","3-idiots":"Question everything","pursuit-happyness":"Keep going","theory-everything":"A life of questions","12-angry-men":"One room. Twelve minds.",shawshank:"Hope never stays quiet","truman-show":"What if everyone was watching?","life-is-beautiful":"A story within a story"};
    const bottoms = {interstellar:"The unknown is waiting","3-idiots":"All is well?","pursuit-happyness":"One step at a time","theory-everything":"Love, time & the universe","12-angry-men":"Doubt is a beginning",shawshank:"Fear can hold you","truman-show":"Question your world","life-is-beautiful":"Imagination as courage"};
    const known = Boolean(posterTitles[film.id]);
    const title = known ? posterTitles[film.id] : escapeHTML(film.title);
    const kicker = known ? kickers[film.id] : [film.country, film.language].filter(Boolean).join(" · ") || film.format || "A story to discover";
    const bottom = known ? bottoms[film.id] : film.director ? `Directed by ${escapeHTML(film.director)}` : "A story worth exploring";
    const symbol = known ? art[film.id] : "✳";
    return `<span class="poster-kicker">${escapeHTML(kicker)}</span><span class="poster-title">${title}</span><span class="poster-art" aria-hidden="true">${symbol}</span><span class="poster-bottom">${bottom}</span><span class="poster-year">${film.year}</span>`;
  }
  function renderCard(film) {
    const status = statuses[film.id] || "";
    const rating = ratings[film.id] || "";
    const genres = film.genres.join(" · ") || film.format || "Film";
    const details = [film.director, film.language, film.country].filter(Boolean).join(" · ");
    const score = film.tmdbScore ? `<span class="tmdb-score" title="TMDB community rating">★ ${Number(film.tmdbScore).toFixed(1)} <small>TMDB</small></span>` : "";
    const posterClass = film.poster ? "film-poster has-real-poster" : `film-poster poster-${film.colour}`;
    return `<div class="col-6 col-md-4 col-xl-2 film-item" data-film-id="${film.id}" data-title="${escapeHTML(film.title)}" data-year="${film.year}" data-genres="${escapeHTML(film.genres.join(" ").toLowerCase())}" data-theme="${escapeHTML(film.theme)}"><article class="film-card"><div class="${posterClass}">${posterMarkup(film)}</div><div class="film-card-body"><div class="film-title-row"><h3>${escapeHTML(film.title)}</h3><span class="film-year">${film.year}</span></div><p class="film-meta">${escapeHTML(genres)}</p>${details ? `<p class="film-meta film-source-meta">${escapeHTML(details)}</p>` : ""}${score}<p class="film-desc">${escapeHTML(film.desc)}</p><label class="visually-hidden" for="status-${film.id}">Your viewing status for ${escapeHTML(film.title)}</label><select id="status-${film.id}" class="status-select" data-status-select="${film.id}"><option value="">Set viewing status…</option><option value="watching" ${status==="watching"?"selected":""}>Watching</option><option value="watched" ${status==="watched"?"selected":""}>Watched</option><option value="will-watch" ${status==="will-watch"?"selected":""}>Will watch</option><option value="in-list" ${status==="in-list"?"selected":""}>In list</option></select><div class="film-card-actions"><span class="status-chip">${statusNames[status] || "Not sorted"}</span><button class="rate-btn" type="button" data-rate="${film.id}" aria-label="Rate ${escapeHTML(film.title)}">${rating?"★":"☆"} <span>${rating?`${rating}/10`:"Rate"}</span></button></div><div class="rating-editor" data-rating-editor="${film.id}" hidden><label for="rating-${film.id}">Your rating</label><select id="rating-${film.id}" class="form-select form-select-sm user-rating" data-rating-select="${film.id}"><option value="">Not rated</option>${Array.from({length:10},(_,i)=>`<option value="${i+1}" ${String(i+1)===String(rating)?"selected":""}>${i+1}</option>`).join("")}</select><span>/ 10</span></div></div></article></div>`;
  }
  function render() {
    grid.innerHTML = films.map(renderCard).join("");
    grid.querySelectorAll("[data-status-select]").forEach(select => select.addEventListener("change", () => {
      const id = select.dataset.statusSelect;
      if (select.value) statuses[id] = select.value; else delete statuses[id];
      writeStore(STATUS_KEY, statuses); render(); update();
    }));
    grid.querySelectorAll("[data-rate]").forEach(button => button.addEventListener("click", () => {
      const editor = grid.querySelector(`[data-rating-editor="${button.dataset.rate}"]`);
      editor.hidden = !editor.hidden;
      if (!editor.hidden) editor.querySelector("select").focus();
    }));
    grid.querySelectorAll("[data-rating-select]").forEach(select => select.addEventListener("change", () => {
      const id = select.dataset.ratingSelect;
      if (select.value) ratings[id] = select.value; else delete ratings[id];
      writeStore(RATING_KEY, ratings); render(); update();
      const editor = grid.querySelector(`[data-rating-editor="${id}"]`); if (editor) editor.hidden = false;
    }));
    update();
  }
  function update() {
    const query = (search.value || "").trim().toLowerCase();
    let visible = 0;
    grid.querySelectorAll(".film-item").forEach(item => {
      const id = item.dataset.filmId;
      const genreText = item.dataset.genres || "";
      const status = statuses[id] || "";
      const genreMatch = activeGenre === "all" || genreText.includes(activeGenre);
      const statusMatch = activeStatus === "all" || status === activeStatus;
      const searchText = `${item.dataset.title} ${item.dataset.year} ${genreText} ${item.dataset.theme} ${item.textContent}`.toLowerCase();
      const show = genreMatch && statusMatch && searchText.includes(query);
      item.hidden = !show;
      if (show) visible++;
    });
    count.textContent = String(visible);
    empty.hidden = visible !== 0;
    results.textContent = `Showing ${visible} ${visible===1?"film":"films"}${query?` matching “${query}”`:""}`;
    const saved = Object.values(statuses).filter(s => s === "in-list").length;
    savedCount.textContent = String(saved);
    document.getElementById("allStatusCount").textContent = String(films.length);
    document.querySelectorAll("[data-status-count]").forEach(el => { el.textContent = String(Object.values(statuses).filter(s => s === el.dataset.statusCount).length); });
  }
  genreFilters.forEach(button => button.addEventListener("click", () => {
    activeGenre = button.dataset.genre || "all";
    genreFilters.forEach(b => { const on=b===button; b.classList.toggle("is-active",on); b.setAttribute("aria-pressed",String(on)); }); update();
  }));
  statusFilters.forEach(button => button.addEventListener("click", () => {
    activeStatus = button.dataset.statusFilter;
    statusFilters.forEach(b => { const on=b===button; b.classList.toggle("is-active",on); b.setAttribute("aria-pressed",String(on)); }); update();
  }));
  search.addEventListener("input", update);
  clear.addEventListener("click", () => {
    search.value = ""; activeGenre="all"; activeStatus="all";
    genreFilters.forEach(b=>{const on=b.dataset.genre==="all";b.classList.toggle("is-active",on);b.setAttribute("aria-pressed",String(on));});
    statusFilters.forEach(b=>{const on=b.dataset.statusFilter==="all";b.classList.toggle("is-active",on);b.setAttribute("aria-pressed",String(on));}); update(); search.focus();
  });
  document.getElementById("openTmdbSettings").addEventListener("click", () => { settings.hidden=!settings.hidden; if(!settings.hidden){tmdbKeyInput.value=tmdbKey;tmdbKeyInput.focus();} });
  document.getElementById("clearTmdbKey").addEventListener("click", () => { tmdbKey="";writeStore(TMDB_KEY_STORAGE,"");tmdbKeyInput.value="";films.forEach(f=>{delete f.poster;delete f.tmdbScore;});render();tmdbMessage.textContent="TMDB key removed. Poster artwork returned to the local placeholders. Reload the page to restore original sample details."; });
  async function loadTMDB(key) {
    tmdbMessage.textContent="Connecting to TMDB…";
    let loaded=0;
    for (const film of films) {
      if (!film.tmdb) continue;
      try {
        const response=await fetch(`https://api.themoviedb.org/3/movie/${film.tmdb}?language=en-US`,{headers:{Authorization:`Bearer ${key}`,Accept:"application/json"}});
        if(!response.ok) throw new Error(response.status===401?"The key was not accepted.":`TMDB returned ${response.status}.`);
        const data=await response.json();
        if(data.poster_path) film.poster=`https://image.tmdb.org/t/p/w342${data.poster_path}`;
        if(data.title) film.apiTitle=data.title;
        if(data.release_date) film.apiYear=Number(data.release_date.slice(0,4));
        if(data.overview) film.desc=data.overview;
        if(data.genres?.length) film.genres=data.genres.map(g=>g.name);
        if(Number.isFinite(data.vote_average)) film.tmdbScore=data.vote_average;
        loaded++;
      } catch (error) { if(error.message.includes("key was not accepted")){tmdbMessage.textContent=error.message;return;} console.warn(`TMDB data unavailable for ${film.title}`,error); }
    }
    films.forEach(f=>{if(f.apiTitle)f.title=f.apiTitle;if(f.apiYear)f.year=f.apiYear;});
    render();
    tmdbMessage.textContent=loaded?`Loaded TMDB data for ${loaded} films with available IDs. The full catalogue remains available locally.`:"Could not load TMDB data. Check your key and internet connection.";
  }
  tmdbForm.addEventListener("submit", async event => {
    event.preventDefault(); const key=tmdbKeyInput.value.trim();
    if(!key){tmdbMessage.textContent="Paste your TMDB API key first.";return;}
    tmdbKey=key;writeStore(TMDB_KEY_STORAGE,key);await loadTMDB(key);
  });
  if (!films.length) { grid.innerHTML = `<p class="film-desc">Your cinema shelf is empty for now.</p>`; count.textContent = "0"; results.textContent = "No films added yet"; return; }
  render();
  if(tmdbKey){tmdbKeyInput.value=tmdbKey;loadTMDB(tmdbKey);}
})();
