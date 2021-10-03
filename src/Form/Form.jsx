import React from 'react';
const Form=(props)=>{
 let state = props.form;
 let formSubmit=(event)=>{
    event.preventDefault()
        const form=event.target;
        const id=form.elements["id"].value;
        const firstName=form.elements["firstName"].value;
        const lastName=form.elements["lastName"].value;
        const email=form.elements["email"].value;
        const phone=form.elements["phone"].value;
        props.addPersonData(id, firstName, lastName, email, phone);
        props.formReset()
       } 
let onNewIdChange = (event) => {
let id = event.target.value;
props.changeId(id);
}
let onNewFirstNameChange = (event) => {
let firstName = event.target.value;
props.changeFirstName (firstName);
}
let onNewLastNameChange = (event) => {
let lastName = event.target.value;
props.changeLastName (lastName);
  }
let onNewEmail = (event) => {
let email = event.target.value;
props.changeEmail (email);
        }
let onNewPhone = (event) => {
let phone = event.target.value;
props.changePhone (phone);
        }
        return (
            <form className="text-left" onSubmit={ formSubmit} >
                <input id="id" type="text" value={state.valueId}  placeholder="ID..." onChange={onNewIdChange} required ></input>
                <input id="firstName" type="text" value={state.valueFirstName} onChange={ onNewFirstNameChange} placeholder="Имя..." required ></input>
                <input id="lastName" type="text" value={state.valueLastName} onChange={ onNewLastNameChange } placeholder="Фамилия..." required></input>
                <input id="email" type="text" value={ state.valueEmail} onChange={ onNewEmail } placeholder="E-mail..." required ></input>
                <input id="phone" type="text" value={ state.valuePhone} onChange={ onNewPhone } placeholder="Телефон..." required ></input>
                <br/>
                <button  type="submit" className="btn btn-secondary" disabled={!(state.valueId&&state.valueFirstName&&state.valueLastName&&state.valueEmail&&state.valuePhone)}>Добавить в таблицу</button>
            </form>
                   )
    }
    export default Form;
    