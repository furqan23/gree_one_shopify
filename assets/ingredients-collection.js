(function () {
  const section = document.querySelector('[data-section-id]');
  if (!section) return;

  const sectionId = section.dataset.sectionId;
  const form = document.getElementById(`FiltersForm-${sectionId}`);
  const grid = document.getElementById(`ProductGrid-${sectionId}`);
  const count = document.getElementById(`ResultsCount-${sectionId}`);

  // ---- Filters → fetch only this section (Section Rendering API)
  const applyFilters = (fd) => {
    const params = new URLSearchParams(fd);
    const base = window.location.pathname;
    const url = `${base}?${params.toString()}&section_id=${sectionId}`;

    fetch(url, { headers: { 'X-Requested-With': 'XMLHttpRequest' } })
      .then((r) => r.text())
      .then((html) => {
        const temp = document.createElement('div');
        temp.innerHTML = html;

        const newGrid = temp.querySelector(`#ProductGrid-${sectionId}`);
        const newCount = temp.querySelector(`#ResultsCount-${sectionId}`);

        if (newGrid) grid.innerHTML = newGrid.innerHTML;
        if (newCount) count.innerHTML = newCount.innerHTML;

        // Update URL (no reload)
        history.replaceState({}, '', `${base}?${params.toString()}`);

        bindCardEvents(grid);
      })
      .catch((e) => console.error('Filter fetch error', e));
  };

  if (form) {
    form.addEventListener('change', (e) => {
      if (e.target.matches('input, select')) {
        applyFilters(new FormData(form));
      }
    });
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      applyFilters(new FormData(form));
    });
  }

  // ---- Card behaviors (variant radios + AJAX add-to-cart)
  function bindCardEvents(scope) {
    // Variant change → update price (pre-formatted by Liquid)
    scope.querySelectorAll('.variant-radios input[type="radio"]').forEach((radio) => {
      radio.addEventListener('change', (e) => {
        const card = e.target.closest('.card');
        const priceEl = card.querySelector('[data-price]');
        priceEl.textContent = e.target.dataset.price;
      });
    });

    // Add to cart (AJAX)
    scope.querySelectorAll('form[data-product-form]').forEach((frm) => {
      frm.addEventListener('submit', (e) => {
        e.preventDefault();
        const fd = new FormData(frm);
        const variantId = fd.get('id');

        fetch('/cart/add.js', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ id: variantId, quantity: 1 })
        })
          .then((r) => r.json())
          .then((data) => {
            // TODO: update cart drawer / mini-cart in your theme
            console.log('Added to cart:', data);
          })
          .catch((err) => console.error('Add to cart error', err));
      });
    });
  }

  bindCardEvents(grid);
})();
