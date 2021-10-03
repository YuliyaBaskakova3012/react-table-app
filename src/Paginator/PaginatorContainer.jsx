import React from 'react';
import {pageChangeHandler} from "./../table-reducer";
import {connect} from "react-redux";
import Paginator from './Paginator';

class PaginatorContainer extends React.Component {
     render() {
     return  ( <Paginator {...this.props}/> )
}
}
let mapStateToProps = (state) => {
return {
  data: state.table.data,
  currentPage: state.table.currentPage,
  pageSize: state.table.pageSize

}
}
export default connect(mapStateToProps, {pageChangeHandler})( PaginatorContainer)
