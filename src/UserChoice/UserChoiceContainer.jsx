import React from 'react';
import {connect} from "react-redux";
import UserChoice from './UserChoice';
class UserChoiceContainer extends React.Component {
render() {
return  ( <>{this.props.row?<UserChoice {...this.props}/>:null} </>)
}
}
let mapStateToProps = (state) => {
return {
row: state.table.row           
}
}
export default connect(mapStateToProps)(UserChoiceContainer)


