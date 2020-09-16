import React from 'react';

export default ({person}) => (
    <div>
    <p>Выбран пользователь <b>{person.firstName + ' ' + person.lastName}</b></p>
    {person.hasOwnProperty("description")?<div > <p>Описание: <br />
    <textarea style={{width: "100%"}} className="text-center" value={person.description} />
    </p></div>:null}
    {person.hasOwnProperty("address")?<div><p>Адрес проживания: <b>{person.address.streetAddress}</b></p>
    <p>Город: <b>{person.address.city}</b></p>
    <p>Провинция/штат: <b>{person.address.state}</b></p>
    <p>Индекс: <b>{person.address.zip}</b></p></div>:null
   }
  </div>
)
