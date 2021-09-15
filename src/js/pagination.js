import Pagination from 'tui-pagination';
import { pagination } from './refs.js';
import { state } from './event_search.js';
import { loadCurrentPage, loadNextPage, loadPrevPage } from './event_search.js'

export const container = document.getElementById('tui-pagination-container');

export const myPagination = new Pagination(container,  {
    // below default value of options
    totalItems: 500,
    itemsPerPage: 10,
    visiblePages: 7,
    page: 1,
    centerAlign: true,    
});

myPagination.on('afterMove', (event) => {
        const currentPage = event.page;
        // console.log(currentPage);
        
        if (currentPage > state.page) {
            loadNextPage();
        }
        if (currentPage < state.page) {
            loadPrevPage();
        }

        if(currentPage !== state.page) {
            state.page = `${currentPage}`;
            loadCurrentPage();

        }
    }
);




