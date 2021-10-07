import React from 'react';
import {pageChangeHandler, sortActionCreator} from './../table-reducer';
import {connect} from 'react-redux';
import Paginator from './Paginator';

const PaginatorContainer =(props)=><Paginator {...props}/> 
const mapStateToProps = (state) => {
return {
  data: state.table.data,
  currentPage: state.table.currentPage,
  pageSize: state.table.pageSize,
  sortField: state.table.sortField,
  sort: state.table.sort,
  sortDirection: state.table.sortDirection
}
}
export default connect(mapStateToProps, {pageChangeHandler, sortActionCreator})( PaginatorContainer);
