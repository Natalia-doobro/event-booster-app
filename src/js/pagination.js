import Pagination from 'tui-pagination';
import { state, onLoadPage } from './event_search.js';

export const container = document.getElementById('tui-pagination-container');

export const options = {
    totalItems: 500,
    itemsPerPage: 10,   
    visiblePages: 7,
    page: 1,
    centerAlign: true,
};

export const myPagination = new Pagination (container, options);

myPagination.on('afterMove', (event) => {
    const currentPage = event.page;
    console.log(currentPage);
             
    if (currentPage === state.page + 1) {
        incrementPage();
        
    }
    if (currentPage === state.page - 1) {        
        dicrementPage();
        onLoadPage(); 
    }

    else {
        state.page = `${currentPage - 1}`;  
        onLoadPage();     
    }
});

    function incrementPage() {
        state.page++;
    }
    
       
    function dicrementPage() {
        state.page--;
    }



