import React from 'react';
import './Table.css';
export default props=>(
    <table className="table bg-light">
              <thead>
                  <tr>
                      <th className="text-center" onClick={props.onSort.bind(null, "id")}><button type="button" className="btn btn-primary">ID <i className={props.sortDirection} aria-hidden="true"></i></button></th>
                      <th className="text-center" onClick={props.onSort.bind(null, "firstName")}><button type="button"  className="btn btn-primary">Имя <i className={props.sortDirection} aria-hidden="true"></i></button></th>
                      <th className="text-center" onClick={props.onSort.bind(null, "lastName")}><button type="button" className="btn btn-primary ">Фамилия <i className={props.sortDirection} aria-hidden="true"></i></button></th>
                      <th className="text-center" onClick={props.onSort.bind(null, "email")}><button type="button" className="btn btn-primary ">E-mail <i className={props.sortDirection} aria-hidden="true"></i></button></th>
                      <th className="text-center" onClick={props.onSort.bind(null, "id")}><button type="button"  className="btn btn-primary ">Телефон <i className={props.sortDirection} aria-hidden="true"></i></button></th>
                  </tr>
              </thead>
            <tbody  className=" text-left bg-light">
                  { props.data.map(item =>(
                      <tr key={item.id +item.phone} onClick={props.onRowSelect.bind(null, item)}>
                          <td>{item.id}</td>
                          <td>{item.firstName}</td>
                          <td>{item.lastName}</td>
                          <td>{item.email}</td>
                          <td>{item.phone}</td>
                      </tr>
                  ))}
              </tbody>
          </table> 
    );
    