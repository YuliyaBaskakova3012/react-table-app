
import { sortD } from "./sort";

const DATASELECTED="DATASELECTED";
const ADDDATA="ADDDATA"
const MODEADDCHANGE="MODEADDCHANGE"
const ADDPERSON="ADDPERSON"
const ONROWSELECT="ONROWSELECT"
const PAGECHANGE="PAGECHANGE"
const SEARCH="SEARCH"
const SEARCHDATA="SEARCHDATA"
const SORT="SORT"
let initialState = {
isDataSelected: false,
isLoading: false,
data: [],
search: '',
sort: 'desc',  
sortField: 'id',
row: null,
currentPage: 0,
modeAdd: false,
sortDirection: "fa fa-arrow-up",
pageSize: 50
};
const tableReducer = (state = initialState, action) => {
switch (action.type) {
 case DATASELECTED: {
return {
...state,
isDataSelected: true,
isLoading: true,
}
 }
case ADDDATA: {
return {
...state,
isLoading: false,
data: action.data
}
}
case MODEADDCHANGE: {
return {
...state,
modeAdd: !state.modeAdd
}
}
case ADDPERSON: {
return {
...state,
data: [{id: action.id, fitstName: action.firstName, lastName: action.lastName, email: action.email, phone: action.phone}, ...state.data]
 }
}
case ONROWSELECT: {
return {
...state,
row: action.row
}
}
case PAGECHANGE: {
return {
...state,
currentPage: action.selected
}
}
case SEARCHDATA: {
return {
...state,
   data: action.result                 
}
}
case SORT: {
  return {
  ...state,
     data: action.data,
     sort: action.sort,
     sortField: action.sortField,
     sortDirection: action.sortDirection,
     isLoading: false                 
  }
  }
default: return state
}
}
export const dataSelected = () => ({type: DATASELECTED });
export const modeAddChange= () => ({type: MODEADDCHANGE });
export const addPerson = (id, firstName, lastName, email, phone) => ({type: ADDPERSON, id, firstName, lastName, email, phone });
export const onRowSelect = (row) => ({type: ONROWSELECT, row });
export const pageChangeHandler = ({selected}) => ({type: PAGECHANGE, selected });
export const searchHandler = (search) => ({type: SEARCH, search });
export const getSearchDataCreator = (result) => ({type: SEARCHDATA, result});
export const addData=(data)=>({type: ADDDATA, data})
export const sortActionCreator=(sortField, data, sort, sortDirection, )=>({type: SORT, sortField, data, sort, sortDirection })
export const dataSelectedThunk = (url) => async (dispatch) => {
    dispatch(dataSelected())
    let res= await fetch(url)
    let data=await res.json()
    let sortData = sortD('id', data, 'asc', "fa fa-arrow-down");
    dispatch(sortActionCreator(...sortData))      
}
export default tableReducer;
