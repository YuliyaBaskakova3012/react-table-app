import React from 'react';
import './DataSelection.css';
export default props =>{
const smallData='https://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';
const bigData='https://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';
return(
    <div className='vertical-align text-center'>
     <h1>Таблица с данными</h1> 
       <div class='row'>
        <div class='col-md-6'><button className='btn btn-primary col-xs-6' onClick={()=>props.dataSelectedThunk(smallData)}>32 элемента</button></div>
        <div class='col-md-6'><button className='btn btn-info col-xs-6' onClick={()=>props.dataSelectedThunk(bigData)}>1000 элементов</button></div>
       </div> 
    </div>
)
}