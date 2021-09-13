import Pagination from 'tui-pagination';
import { pagination } from './refs.js'

// const Pagination = tui.Pagination;

 export const container = document.getElementById('tui-pagination-container');

export const myPagination = new Pagination(container,  {
    // below default value of options
    totalItems: 10,
    itemsPerPage: 10,
    visiblePages: 10,
    page: 1,
    centerAlign: false
});
