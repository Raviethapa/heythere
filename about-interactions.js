/* About page interactions: rotating personality words and thoughts, with pause-on-hover. */
(() => {
  "use strict";
  const $ = id => document.getElementById(id);

  // Thought above the introduction: changes every 5 seconds and pauses while read.
  const thoughtText = $("aboutThoughtText");
  const thoughtCredit = $("aboutThoughtCredit");
  const thoughtCard = document.querySelector(".about-thought");
  const thoughts = Array.isArray(window.RAVIE_THOUGHTS) ? window.RAVIE_THOUGHTS : [];
  if (thoughtText && thoughts.length) {
    let previous = -1;
    let thoughtTimer = null;
    const pickThought = () => {
      let next = Math.floor(Math.random() * thoughts.length);
      if (thoughts.length > 1) while (next === previous) next = Math.floor(Math.random() * thoughts.length);
      previous = next;
      const item = thoughts[next];
      thoughtText.classList.add("is-changing");
      window.setTimeout(() => {
        thoughtText.textContent = item.text;
        if (thoughtCredit) thoughtCredit.textContent = "— " + (item.credit || "Ravie’s thought collection · draft");
        thoughtText.classList.remove("is-changing");
      }, 180);
    };
    const startThoughts = () => { if (!thoughtTimer) thoughtTimer = window.setInterval(pickThought, 5000); };
    const stopThoughts = () => { if (thoughtTimer) { window.clearInterval(thoughtTimer); thoughtTimer = null; } };
    pickThought(); startThoughts();
    if (thoughtCard) {
      thoughtCard.addEventListener("mouseenter", stopThoughts);
      thoughtCard.addEventListener("mouseleave", startThoughts);
      thoughtCard.addEventListener("focusin", stopThoughts);
      thoughtCard.addEventListener("focusout", startThoughts);
    }
  }

  const descriptors = [
    ["overthinker", "Someone who can turn one small thought into a full committee meeting in their head."],
    ["curious", "Likely to ask one more question after everyone else thinks the conversation is over."],
    ["intellectual-ish", "Drawn to ideas, patterns, books, and conversations that leave the mind a little busier."],
    ["funny (occasionally)", "Believes a well-timed observation can rescue even a painfully ordinary Tuesday."],
    ["introvert-leaning", "Enjoys people; also appreciates the quiet after being around people."],
    ["philosophical", "Can find a question about existence hiding inside an otherwise normal cup of tea."],
    ["sapio-curious", "Attracted to a sharp mind, thoughtful conversation, and people who keep learning."],
    ["perfectionist-ish", "Wants to improve the details, then has to remember that finished beats endlessly polished."],
    ["melancholic sometimes", "Feels things deeply now and then; not a diagnosis, just a mood that visits."],
    ["romantic", "Still thinks small gestures and meaningful words can matter more than grand displays."],
    ["observant", "Notices little details, then wonders if they mean anything. Sometimes they do."],
    ["quietly ambitious", "Has plans, makes lists, revises the lists, and eventually tries to do the work."],
    ["a cinephile", "Can leave a film thinking about the characters, the choices, and the ending for days."],
    ["a bibliophile", "Believes books are excellent company and an excellent way to acquire more books."],
    ["a work in progress", "Still learning what fits, what matters, and what can safely be left unfinished."],
    ["sarcastic (with care)", "Uses a little irony to make sense of the world, ideally without making it worse."],
    ["sentimental", "Keeps certain lines, scenes, and memories longer than strictly necessary."],
    ["occasionally chaotic", "Has a system for things, and then a separate system for finding the system."],
    ["humanist", "Tries to understand people before reducing them to a label or a first impression."],
    ["a night thinker", "Often finds the most interesting questions right when it should probably be bedtime."]
  ];
  const word = $("personalityWord"), definition = $("personalityDefinition"), progress = $("personalityProgress");
  const card = document.querySelector(".personality-block");
  if (!word || !definition) return;
  let index = Math.floor(Math.random() * descriptors.length);
  let wordTimer = null;
  const show = () => {
    const [label, meaning] = descriptors[index];
    word.classList.add("is-changing");
    definition.classList.add("is-changing");
    window.setTimeout(() => {
      word.textContent = label;
      definition.textContent = meaning;
      word.classList.remove("is-changing");
      definition.classList.remove("is-changing");
      if (progress) {
        progress.style.transition = "none";
        progress.style.width = "0%";
        void progress.offsetWidth;
        progress.style.transition = "width 3s linear";
        progress.style.width = "100%";
      }
    }, 180);
    index = (index + 1) % descriptors.length;
  };
  const startWords = () => {
    if (wordTimer) return;
    if (progress) { progress.style.transition = "none"; progress.style.width = "0%"; void progress.offsetWidth; progress.style.transition = "width 3s linear"; progress.style.width = "100%"; }
    wordTimer = window.setInterval(show, 3000);
  };
  const stopWords = () => {
    if (wordTimer) { window.clearInterval(wordTimer); wordTimer = null; }
    if (progress) { const width = getComputedStyle(progress).width; progress.style.transition = "none"; progress.style.width = width; }
  };
  show(); startWords();
  if (card) {
    card.addEventListener("mouseenter", stopWords);
    card.addEventListener("mouseleave", startWords);
    card.addEventListener("focusin", stopWords);
    card.addEventListener("focusout", startWords);
  }


  // Final profile orb: cycle through identity words only (no definitions).
  const profileWord = $("profileWord");
  if (profileWord) {
    const words = [
      "overthinker", "curious", "intellectual-ish", "cinephile", "reader",
      "philosophical", "observant", "introvert-ish", "dreamer", "work in progress",
      "perfectionist-ish", "occasionally funny", "history-minded", "melancholic sometimes",
      "quietly ambitious", "sapio-curious", "story collector"
    ];
    let index = 0;
    window.setInterval(() => {
      profileWord.classList.add("is-changing");
      window.setTimeout(() => {
        index = (index + 1) % words.length;
        profileWord.textContent = words[index];
        profileWord.classList.remove("is-changing");
      }, 240);
    }, 3000);
  }


  // The final connection note changes the feeling word, never the invitation itself.
  const feelingWord = $("feelingWord");
  if (feelingWord) {
    const feelings = ["low", "lonely", "stressed", "overwhelmed", "anxious", "stuck", "unmotivated", "a little lost", "not quite yourself", "having a rough day", "uncertain", "tired of everything"];
    let feelingIndex = 0;
    window.setInterval(() => {
      feelingWord.classList.add("is-changing");
      window.setTimeout(() => {
        feelingIndex = (feelingIndex + 1) % feelings.length;
        feelingWord.textContent = feelings[feelingIndex];
        feelingWord.classList.remove("is-changing");
      }, 220);
    }, 3000);
  }
  const profileHeart = $("profileHeart");
  if (profileHeart) {
    const heartColors = ["#f06b91", "#f4c95d", "#f4eee5", "#ef5350", "#a9152a", "#ffffff"];
    let heartIndex = 0;
    profileHeart.style.color = heartColors[0];
    window.setInterval(() => {
      heartIndex = (heartIndex + 1) % heartColors.length;
      profileHeart.style.color = heartColors[heartIndex];
    }, 2000);
  }

})();
