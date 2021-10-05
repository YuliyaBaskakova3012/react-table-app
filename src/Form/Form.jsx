import React from 'react';
const Form=(props)=>{
 let state = props.form;
 let formSubmit=(event)=>{
  event.preventDefault();
        const form=event.target;
        const id=form.elements['id'].value;
        const firstName=form.elements['firstName'].value;
        const lastName=form.elements['lastName'].value;
        const email=form.elements['email'].value;
        const phone=form.elements['phone'].value;
        props.addPersonData(id, firstName, lastName, email, phone);
        props.formReset();
       } 
         let changeItem=(event)=>{
         let id=event.target.id;
         let value=event.target.value;
         switch(id){
           case 'id': props.changeId(value)
           break;
           case 'firstName': props.changeFirstName(value)
           break;
           case 'lastName': props.changeLastName(value)
           break;
           case 'email': props.changeEmail(value)
           break;
           case 'phone': props.changePhone(value)
           break;
           default: 
         }
        }
        return (
            <form className='text-left' onSubmit={ formSubmit} >
                <input id='id' type='text' value={state.valueId} onChange={changeItem}  placeholder='ID...' required ></input>
                <input id='firstName' type='text' value={state.valueFirstName} onChange={changeItem} placeholder='Имя...' required ></input>
                <input id='lastName' type='text' value={state.valueLastName} onChange={ changeItem } placeholder='Фамилия...' required></input>
                <input id='email' type='email' value={ state.valueEmail} onChange={ changeItem } placeholder='E-mail...' required ></input>
                <input id='phone' type='text' value={ state.valuePhone} onChange={ changeItem } placeholder='Телефон...' required ></input>
                <br/>
                <button type='submit' className='btn btn-secondary' disabled={!(state.valueId&&state.valueFirstName&&state.valueLastName&&state.valueEmail&&state.valuePhone)}>Добавить в таблицу</button>
            </form>
                   )
    }
    export default Form;
    