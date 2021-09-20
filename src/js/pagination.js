import Pagination from 'tui-pagination';
import { state, onLoadPage } from './event_search.js';

export const container = document.getElementById('tui-pagination-container');

export const options = {
    totalItems: 500,
    itemsPerPage: 10,
    visiblePages: 5,
    page: 1,
    centerAlign: true,
};

export const myPagination = new Pagination(container, options);

myPagination.on('afterMove', (event) => {
    const currentPage = event.page;



    if (currentPage === state.page + 1) {
        loadNextPage();
    }
    if (currentPage === state.page - 1) {
        loadPrevPage();
    }

    else {
        state.page = `${currentPage}`;
        onLoadPage();
    }

});

function incrementPage() {
    state.page++;
}


function dicrementPage() {
    state.page--;
}



