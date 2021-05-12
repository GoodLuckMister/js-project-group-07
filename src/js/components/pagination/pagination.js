import refs from '../refs'

export default function makePaginationList(r, api) {

    paginationMarkup(r, api)
    
    const buttons = document.querySelectorAll('.pagination__button');
    for (const button of buttons) {
        if (Number(button.textContent) === api.page + 1) {
            button.classList.add('current-page-js')
            break
        }
    }

}

function paginationMarkup(r, api) {
    const lastPage = r.page.totalPages > 50 ? 50 : r.page.totalPages;

    if (lastPage >= 0 && lastPage <= 4) {
        let template = '';
         for (let i = 0; i <= lastPage; i++) {
        template += ` <li class="pagination__item page"><button class="pagination__button">${i + 1}</button></li>`
         }
        refs.paginationList.innerHTML = template
    }
   
    if (api.page < 4) {
      refs.paginationList.innerHTML = `<li class="pagination__item page"><button class="pagination__button">1</button></li> <li class="pagination__item page"><button class="pagination__button">2</button></li> <li class="pagination__item page"><button class="pagination__button">3</button></li> <li class="pagination__item page"><button class="pagination__button">4</button></li> <li class="pagination__item page"><button class="pagination__button">5</button></li> <li class="pagination__item"><button class="pagination__button" disabled>...</button></li> <li class="pagination__item page"><button class="pagination__button">${lastPage}</button></li>`;
        
    }
    
    if (api.page >= 4) {
      refs.paginationList.innerHTML = `<li class="pagination__item page"><button class="pagination__button">1</button></li> <li class="pagination__item"><button class="pagination__button" disabled>...</button></li> <li class="pagination__item page"><button class="pagination__button">${api.page - 1}</button></li> <li class="pagination__item page"><button class="pagination__button">${api.page}</button></li> <li class="pagination__item page"><button class="pagination__button">${api.page + 1}</button></li> <li class="pagination__item page"><button class="pagination__button">${api.page + 2}</button></li> <li class="pagination__item page"><button class="pagination__button">${api.page + 3}</button></li> <li class="pagination__item"><button class="pagination__button" disabled>...</button></li> <li class="pagination__item page"><button class="pagination__button">${lastPage}</button></li>`;
        
    }

    if (api.page >= lastPage - 4 || api.page === lastPage) {
     refs.paginationList.innerHTML = `<li class="pagination__item page"><button class="pagination__button">1</button></li> <li class="pagination__item"><button class="pagination__button" disabled>...</button></li> <li class="pagination__item page"><button class="pagination__button">${lastPage - 5}</button></li> <li class="pagination__item page"><button class="pagination__button">${lastPage - 4}</button></li> <li class="pagination__item page"><button class="pagination__button">${lastPage - 3}</button></li> <li class="pagination__item page"><button class="pagination__button">${lastPage - 2}</button></li> <li class="pagination__item page"><button class="pagination__button">${lastPage - 1}</button></li> <li class="pagination__item page"><button class="pagination__button">${lastPage}</button></li>`;
        
    }
}


