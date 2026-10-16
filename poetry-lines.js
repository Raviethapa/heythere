(() => {
  const cards = [...document.querySelectorAll('#poetry-notebook .poet-card')];
  if (!cards.length) return;

  function selectCard(card) {
    cards.forEach(item => {
      const selected = item === card;
      item.classList.toggle('is-selected', selected);
      const button = item.querySelector('.poet-select');
      if (button) button.setAttribute('aria-pressed', String(selected));
    });
  }

  cards.forEach(card => {
    const button = card.querySelector('.poet-select');
    if (!button) return;
    button.addEventListener('click', () => {
      const alreadySelected = card.classList.contains('is-selected');
      cards.forEach(item => {
        item.classList.remove('is-selected');
        const b = item.querySelector('.poet-select');
        if (b) b.setAttribute('aria-pressed', 'false');
      });
      if (!alreadySelected) selectCard(card);
    });
  });
})();
