'use strict';

// write code here

const thead = document.querySelector('thead');

thead.addEventListener('click', (events) => {
  const th = events.target.closest('th');

  if (!th) {
    return 0;
  }

  const i = th.cellIndex;

  const tbody = document.querySelector('tbody');
  const tr = tbody.querySelectorAll('tr');

  const trArray = Array.from(tr);

  trArray.sort((a, b) => {
    const indexA = a.children[i];
    const indexB = b.children[i];

    const textA = indexA.textContent;
    const textB = indexB.textContent;

    const numA = Number(textA.replace(/[^0-9.-]/g, ''));
    const numB = Number(textB.replace(/[^0-9.-]/g, ''));

    if (!Number.isNaN(numA) && !Number.isNaN(numB)) {
      return numA - numB;
    }

    return textA.localeCompare(textB);
  });

  tbody.innerHTML = '';

  trArray.forEach((el) => {
    tbody.append(el);
  });
});
