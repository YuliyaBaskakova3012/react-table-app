import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import Loader from './Loader/Loader';
import Table from './Table/Table';
import UserChoice from './UserChoice/UserChoice';
import DataSelection from './DataSelection/DataSelection';
import SearchBar from './SearchBar/SearchBar';
import Form from './Form/Form';
import _ from 'lodash';

class App extends Component {
  constructor(props){
    super(props);
  this.state ={
    isDataSelected: false,
    isLoading: false,
    data: [],
    search: '',
    sort: 'asc',  
    sortField: 'id',
    row: null,
    currentPage: 0,
    modeAdd: false,
    sortDirection: "fa fa-arrow-up"
   
  }
  this.addPerson=this.addPerson.bind(this);
  this.modeAddChange=this.modeAddChange.bind(this);
}
//Выбор набора данных
dataSelectHandler = url => {
  this.setState({
    isDataSelected: true,
    isLoading: true,
  })
  this.fetchData(url)
}

//Загрузка данных с сервера
async fetchData(url) {
  const response = await fetch(url)
  const data = await response.json()
  this.setState({
    isLoading: false,
    data
  })
}

 //Метод для реализации сортировки по столбцам таблицы
 onSort = sortField => {
  const cloneData = this.state.data.concat();
  const sort = this.state.sort === 'asc' ? 'desc' : 'asc';
  const sortDirection = this.state.sortDirection === 'fa fa-arrow-up' ? 'fa fa-arrow-down' : 'fa fa-arrow-up';
  const data = _.orderBy(cloneData, sortField, sort);
  this.setState({ data, sort, sortField, sortDirection})
}

//Управление выпадением формы добавления ряда 
modeAddChange(){
  this.setState({
    modeAdd: !this.state.modeAdd
  })
}

//Добавление данных в таблицу
addPerson(id, firstName, lastName, email, phone){
 this.setState(prevState=>({
   data: [ {id, firstName, lastName, email, phone},...prevState.data]
 }))
}
 
//Выбор строки для отображения под таблицей
  onRowSelect = row => (
    this.setState({row})
  )

//Изменение страницы при пагинации
  pageChangeHandler = ({selected}) => (
    this.setState({currentPage: selected})
  )

//Поиск подстроки
  searchHandler = search => {
    this.setState({search, currentPage: 0})
  }

//Получение отфильтрованных данных
  getFilteredData(){
    const {data, search} = this.state
    if (!search) {
      return data
    }
   var result = data.filter(item => {
     return (
       item["id"].toString().toLowerCase().includes(search.toLowerCase())||
       item["firstName"].toLowerCase().includes(search.toLowerCase()) ||
       item["lastName"].toLowerCase().includes(search.toLowerCase()) ||
       item["email"].toLowerCase().includes(search.toLowerCase())||
       item["phone"].toLowerCase().includes(search.toLowerCase())
     );
   });
   if(!result.length){
     result = this.state.data
   }
    return result
  }

  render() {
     const pageSize = 50;
      if(!this.state.isDataSelected){
        return (
            <DataSelection onSelect={this.dataSelectHandler}/>
        )
      }
      const filteredData = this.getFilteredData(); 
      const pageCount = Math.ceil(filteredData.length / pageSize)
      const displayData = _.chunk(filteredData, pageSize)[this.state.currentPage]
      return (
         <div className=" container container-field text-center ">
        {
          this.state.isLoading 
          ? <Loader />
          : <div className="text-left">
            <h1 className="text-center">Таблица с данными</h1> 
              <SearchBar onSearch={this.searchHandler}/>
              <button className="btn btn-secondary" onClick={this.modeAddChange}>Добавить</button> 
          {this.state.modeAdd?<Form addPerson={this.addPerson}/>:null} 
              <Table 
                data={displayData}
                onSort={this.onSort}
                sort={this.state.sort}
                sortField={this.state.sortField}
                onRowSelect={this.onRowSelect}
                sortDirection={this.state.sortDirection}
              />
            </div>
        }
        {
          this.state.data.length > pageSize
          ?<div className=" container text-center" style={{display: "flex", width: "400px", justifyContent: "center"}}><ReactPaginate  style={{width: "400px"}}
          previousLabel={'<'}
          nextLabel={'>'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.pageChangeHandler}
          containerClassName={'pagination'}
          activeClassName={'active'}
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          nextClassName="page-item"
          previousLinkClassName="page-link"
          nextLinkClassName="page-link"
          forcePage={this.state.currentPage}
        /></div>: null
        } 
        {
          this.state.row ? <UserChoice person={this.state.row} /> : null
        }
        </div>   
      );
    }  
}
export default App;