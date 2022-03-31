import React from 'react';
import {connect} from 'react-redux';
import {getSearchDataCreator} from '../../redux/table-reducer';
import SearchBar from './SearchBar';
const SearchBarContainer=(props)=><>{props.isDataSelected?
props.isLoading?null:
<SearchBar {...props}/>:null} 
</>
const mapStateToProps = (state) => {
return {
search: state.table.search,
data: state.table.data,
isDataSelected: state.table.isDataSelected,
isLoading: state.table.isLoading           
}
}
const mapDispatchToProps = (dispatch) => {
return {
onSearch: (result) => {
dispatch(getSearchDataCreator (result));
}
}
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchBarContainer);






