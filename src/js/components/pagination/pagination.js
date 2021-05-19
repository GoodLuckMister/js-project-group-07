import refs from '../refs/refs';

export default function makePaginationList(r, api) {
  paginationMarkup(r, api);

  const buttons = document.querySelectorAll('.pagination__button');
  for (const button of buttons) {
    if (Number(button.textContent) === api.page + 1) {
      button.classList.add('current-page-js');
      break;
    }
  }
}

function paginationMarkup(r, api) {
  const totalPages = r.page.totalPages > 50 ? 50 : r.page.totalPages;
  const currentPage = api.page;
  if (totalPages === 0) {
    return;
  }

  if (totalPages >= 1 && totalPages <= 5) {
    let template = '';
    for (let i = 1; i <= totalPages; i++) {
      template += ` <li class="pagination__item page"><button class="pagination__button">${i}</button></li>`;
    }
    refs.paginationList.innerHTML = template;
    return;
  }

  if (currentPage < 4) {
    refs.paginationList.innerHTML = `<li class="pagination__item page"><button class="pagination__button">1</button></li> <li class="pagination__item page"><button class="pagination__button">2</button></li> <li class="pagination__item page"><button class="pagination__button">3</button></li> <li class="pagination__item page"><button class="pagination__button">4</button></li> <li class="pagination__item page"><button class="pagination__button">5</button></li> <li class="pagination__item"><button class="pagination__button" disabled>...</button></li> <li class="pagination__item page"><button class="pagination__button">${totalPages}</button></li>`;
    return;
  }

  if (currentPage >= totalPages - 4 || currentPage === totalPages) {
    refs.paginationList.innerHTML = `<li class="pagination__item page"><button class="pagination__button">1</button></li> <li class="pagination__item"><button class="pagination__button" disabled>...</button></li> <li class="pagination__item page"><button class="pagination__button">${
      totalPages - 5
    }</button></li> <li class="pagination__item page"><button class="pagination__button">${
      totalPages - 4
    }</button></li> <li class="pagination__item page"><button class="pagination__button">${
      totalPages - 3
    }</button></li> <li class="pagination__item page"><button class="pagination__button">${
      totalPages - 2
    }</button></li> <li class="pagination__item page"><button class="pagination__button">${
      totalPages - 1
    }</button></li> <li class="pagination__item page"><button class="pagination__button">${totalPages}</button></li>`;
    return;
  }

  if (currentPage >= 4) {
    refs.paginationList.innerHTML = `<li class="pagination__item page"><button class="pagination__button">1</button></li> <li class="pagination__item"><button class="pagination__button" disabled>...</button></li> <li class="pagination__item page"><button class="pagination__button">${
      currentPage - 1
    }</button></li> <li class="pagination__item page"><button class="pagination__button">${currentPage}</button></li> <li class="pagination__item page"><button class="pagination__button">${
      currentPage + 1
    }</button></li> <li class="pagination__item page"><button class="pagination__button">${
      currentPage + 2
    }</button></li> <li class="pagination__item page"><button class="pagination__button">${
      currentPage + 3
    }</button></li> <li class="pagination__item"><button class="pagination__button" disabled>...</button></li> <li class="pagination__item page"><button class="pagination__button">${totalPages}</button></li>`;
    return;
  }
}
