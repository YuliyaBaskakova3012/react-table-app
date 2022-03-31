const CHANGE_ID='CHANGE_ID';
const CHANGE_FIRST_NAME='CHANGE_FIRST_NAME';
const CHANGE_LAST_NAME='CHANGE_LAST_NAME';
const CHANGE_EMAIL='CHANGE_EMAIL';
const CHANGE_PHONE='CHANGE_PHONE';
const FORM_RESET='FORM_RESET';
let initialState = {
valueId: '',
valueFirstName: '',
valueLastName: '',
valueEmail: '',
valuePhone: ''
};
const formReducer = (state = initialState, action) => {
switch (action.type) {
case CHANGE_ID: {
return {
...state,
valueId: action.id,
 };
}
case CHANGE_FIRST_NAME: {
return {
...state,
valueFirstName: action.firstName
}
}
case CHANGE_LAST_NAME: {
return {
...state,
valueLastName: action.lastName
}
}
case CHANGE_EMAIL: {
return {
...state,
valueEmail: action.email
}
}
case CHANGE_PHONE: {
return {
...state,
valuePhone: action.phone
}
}
case FORM_RESET: {
return {
...state,
valueId: '',
valueFirstName: '',
valueLastName: '',
valueEmail: '',
valuePhone: ''
  }
  }
default: return state;
}
}
export const changeIdCreator = (id) => ({type: CHANGE_ID, id});
export const changeFirstNameCreator = (firstName) => ({type: CHANGE_FIRST_NAME, firstName});
export const changeLastNameCreator = (lastName) => ({type: CHANGE_LAST_NAME, lastName});
export const changeEmailCreator = (email) => ({type: CHANGE_EMAIL, email});
export const changePhoneCreator = (phone) => ({type: CHANGE_PHONE, phone});
export const formReset = () => ({type: FORM_RESET});
export default formReducer;