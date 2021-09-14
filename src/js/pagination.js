import Pagination from 'tui-pagination';
import { pagination } from './refs.js';
import state from './event_search.js';

export const container = document.getElementById('tui-pagination-container');

export const myPagination = new Pagination(container,  {
    // below default value of options
    totalItems: 500,
    itemsPerPage: 10,
    visiblePages: 5,
    page: 1,
    centerAlign: false,    
});

pagination.addEventListener('click', onShowPagPage);


export function onShowPagPage(e) {
    console.log(e.target);
    myPagination.on('afterMove', (event) => {
        const currentPage = event.page;
        console.log(currentPage);
        if (currentPage === page.number) {
            return;
        }
        if (currentPage++) {
            onLoadPage();
        }
    });
    
    
    // myPagination.on('beforeMove', (event) => {
    //     const currentPage = event.page;
    
    //     if (currentPage === 10) {
    //         return false;
    //         // return true;
    //     }
    // });
}

