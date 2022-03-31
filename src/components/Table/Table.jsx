import React from 'react';
import './Table.css';
import sortDataFunction from '../common/sortDataFunction';
import _ from 'lodash';
export default ({data, modeAddChange, onRowSelect, currentPage, sortActionCreator, sort, sortDirection, pageSize})=>{

let onSort = sortField => {
let sortData=sortDataFunction(sortField, data, sort, sortDirection);
sortActionCreator(...sortData);
}      
const displayData = _.chunk(data, pageSize)[currentPage];
return(
    <div>
<button className='btn btn-secondary' onClick={()=>modeAddChange()} >Добавить</button> 
    <table className='table bg-light'>
              <thead>
                  <tr>
                      <th className='text-center'><button type='button' className='btn btn-primary' onClick={ onSort.bind(null, 'id')}>ID <i className={sortDirection} aria-hidden='true'></i></button></th>
                      <th className='text-center'><button type='button' className='btn btn-primary' onClick={ onSort.bind(null, 'firstName')}>Имя <i className={sortDirection} aria-hidden='true'></i></button></th>
                      <th className='text-center'><button type='button' className='btn btn-primary' onClick={ onSort.bind(null, 'lastName')}>Фамилия <i className={sortDirection} aria-hidden='true'></i></button></th>
                      <th className='text-center'><button type='button' className='btn btn-primary' onClick={ onSort.bind(null, 'email')}>E-mail <i className={sortDirection} aria-hidden='true'></i></button></th>
                      <th className='text-center'><button type='button' className='btn btn-primary' onClick={ onSort.bind(null, 'phone')}>Телефон <i className={sortDirection} aria-hidden='true'></i></button></th>
                  </tr>
              </thead>
              {data.length?
              <tbody className='text-left bg-light'>
              
              {  displayData.map(item =>(
       <tr key={item.id +item.phone} onClick={onRowSelect.bind(null, item)}>
       <td>{item.id}</td>
            <td>{item.firstName}</td>
           <td>{item.lastName}</td>
           <td>{item.email}</td>
           <td>{item.phone}</td>
        </tr>
    ))}
              </tbody>:null}
    </table> 
          </div>
    );
                  }