import React, {Component} from 'react';

class Form extends Component{
    constructor(props){
        super(props);
        this.state={
            valueId: "",
            valueFirstName: "",
            valueLastName: "",
            valueEmail: "",
            valuePhone: ""
        }
        this.formSubmit=this.formSubmit.bind(this);
        this.changeId=this.changeId.bind(this);
        this.changeFirstName=this.changeFirstName.bind(this);
        this.changeLastName=this.changeLastName.bind(this);
        this.changeEmail=this.changeEmail.bind(this);
        this.changePhone=this.changePhone.bind(this);
    }
formSubmit(event){
    event.preventDefault();
    this.setState({
    valueId: "",
    valueFirstName: "",
    valueLastName: "",
    valueEmail: "",
    valuePhone: ""
})
    const form=event.target;
    const id=form.elements["id"].value;
    const firstName=form.elements["firstName"].value;
    const lastName=form.elements["lastName"].value;
    const email=form.elements["email"].value;
    const phone=form.elements["phone"].value;
    this.props.addPerson(id, firstName, lastName, email, phone);
    form.reset();
   } 
changeId(event){ 
    this.setState({
    valueId: event.target.value
   })         
}    
changeFirstName(event){
    this.setState({
    valueFirstName: event.target.value
    })  
}
changeLastName(event){
    this.setState({
    valueLastName: event.target.value
    })  
}
changeEmail(event){
   this.setState({
   valueEmail: event.target.value
    })  
}
changePhone(event){
    this.setState({
    valuePhone: event.target.value
    })  
}
render(){
    return(
    <form className="text-left" onSubmit={this.formSubmit} >
      <input id="id" type="text" value={this.state.valueId}  placeholder="ID..." onChange={this.changeId} required ></input>
      <input id="firstName" type="text" value={this.state.valueFirstName} onChange={this.changeFirstName} placeholder="Имя..." required ></input>
      <input id="lastName" type="text" value={this.state.valueLastName} onChange={this.changeLastName} placeholder="Фамилия..." required></input>
      <input id="email" type="text" value={this.state.valueEmail} onChange={this.changeEmail} placeholder="E-mail..." required ></input>
      <input id="phone" type="text" value={this.state.valuePhone} onChange={this.changePhone} placeholder="Телефон..." required ></input>
      <br/>
      <button  type="submit" className="btn btn-secondary" disabled={!(this.state.valueId&&this.state.valueFirstName&&this.state.valueLastName&&this.state.valueEmail&&this.state.valuePhone)}>Добавить в таблицу</button>
      </form>
          )
   }
}
export default Form;