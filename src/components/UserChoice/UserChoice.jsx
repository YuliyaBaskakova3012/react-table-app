import React from 'react';
export default props => (
    <div>
    <p>Выбран пользователь <b>{props.row.firstName + ' ' + props.row.lastName}</b></p>
    {props.row.hasOwnProperty('description')?<div > <p>Описание: <br />
    <textarea style={{width: '100%'}} className='text-center' value={props.row.description} />
    </p></div>:null}
    {props.row.hasOwnProperty('address')?<div><p>Адрес проживания: <b>{props.row.address.streetAddress}</b></p>
    <p>Город: <b>{props.row.address.city}</b></p>
    <p>Провинция/штат: <b>{props.row.address.state}</b></p>
    <p>Индекс: <b>{props.row.address.zip}</b></p></div>:null
   }
  </div>
)
