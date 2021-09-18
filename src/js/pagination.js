import Pagination from 'tui-pagination';
import { onEventSearch, state, totalPages } from './event_search.js';
import { onLoadPage } from './event_search.js';



export const container = document.getElementById('tui-pagination-container');

export const myPagination = new Pagination(container,  {
    // below default value of options
    // totalItems: 124,
    totalItems: 500,
    itemsPerPage: 20,   
    visiblePages: 7,
    page: 1,
    centerAlign: true,
    
});





myPagination.on('afterMove', (event) => {
    const currentPage = event.page;
    console.log(currentPage);
    // myPagination.totalItems = `${totalPages.value}`;
        
    if (currentPage === state.page + 1) {
        incrementPage();
        
    }
    if (currentPage === state.page - 1) {        
        dicrementPage();
        onLoadPage(); 
    }

    else {
        state.page = `${currentPage}`;  
        onLoadPage();     
    }
     
        
});



    function incrementPage() {
        state.page++;
    }
    
    function resetPage() {
        state.page = 1;
    }
    
    function dicrementPage() {
        state.page--;
    }



