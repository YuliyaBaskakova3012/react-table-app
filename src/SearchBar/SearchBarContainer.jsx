import React from 'react';
import {connect} from "react-redux";
import {getSearchDataCreator} from "../table-reducer";
import SearchBar from './SearchBar';
class SearchBarContainer extends React.Component {
render() {
 return  (<>{this.props.isDataSelected?
 this.props.isLoading?
 null:<SearchBar {...this.props}/>
 :null} 
    </>
    )
}
}
let mapStateToProps = (state) => {
return {
search: state.table.search,
data: state.table.data,
isDataSelected: state.table.isDataSelected,
isLoading: state.table.isLoading           
}
}
let mapDispatchToProps = (dispatch) => {
return {
onSearch: (result) => {
dispatch(getSearchDataCreator (result));
}
}
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchBarContainer);






