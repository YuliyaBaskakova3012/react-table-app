import React from 'react';
import {connect} from 'react-redux';
import UserChoice from './UserChoice';
const UserChoiceContainer=(props)=><>{props.row?<UserChoice {...props}/>:null} </>
const mapStateToProps = (state) => {
return {
row: state.table.row           
}
}
export default connect(mapStateToProps)(UserChoiceContainer);


