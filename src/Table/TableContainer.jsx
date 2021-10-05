import React from 'react';
import {connect} from 'react-redux';
import Loader from '../Loader/Loader';
import {dataSelectedThunk, modeAddChange, onRowSelect, sortActionCreator } from '../table-reducer';
import Table from './Table';
class TableContainer extends React.Component {
render() {
        return  (<>{this.props.isDataSelected?
            this.props.isLoading?<Loader/>:
           <Table {...this.props} />
           :null} 
               </>
               )
    }
}
const mapStateToProps = (state) => ({
data: state.table.data,
isDataSelected: state.table.isDataSelected,
isLoading: state.table.isLoading,
modeAdd: state.table.modeAdd,
row: state.table.row,
currentPage: state.table.currentPage,
pageSize: state.table.pageSize,
sort: state.table.sort,
sortDirection: state.table.sortDirection
})
export default connect(mapStateToProps, {dataSelectedThunk, modeAddChange, onRowSelect, sortActionCreator})(TableContainer);