import React from 'react';
import { changeIdCreator, changeFirstNameCreator, changeLastNameCreator, changeEmailCreator, changePhoneCreator, formReset } from "../../redux/form-reducer";
import Form from './Form';
import {connect} from 'react-redux';
import { addPerson } from '../../redux/table-reducer';
const FormContainer=(props)=><>{props.modeAdd?<Form {...props}/>:null} </>   
const mapStateToProps = (state) => {
return {
form: state.form,
data: state.table.data,
modeAdd: state.table.modeAdd          
}
}
const mapDispatchToProps = (dispatch) => {
return {
changeId: (id) => {
dispatch(changeIdCreator(id));
},
changeFirstName: (firstName) => {
dispatch(changeFirstNameCreator (firstName));
},
changeLastName: (lastName) => {
dispatch(changeLastNameCreator (lastName));
},
changeEmail: (email) => {
dispatch(changeEmailCreator (email));
},
changePhone: (phone) => {
dispatch(changePhoneCreator (phone));
},
addPersonData: (id, firstName, lastName, email, phone)=>{
dispatch(addPerson(id, firstName, lastName, email, phone))
},
formReset: ()=>{
dispatch(formReset())
}
}
}
export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);



