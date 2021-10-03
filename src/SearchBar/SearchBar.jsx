import React, {useState} from 'react'
export default props => {
const [value, setValue] = useState('')
 const valueChangeHandler = event => {
setValue(event.target.value)
 }
 const onSearch=(search)=>{
  let result = props.data.filter(item => {
    return (
      item["id"].toString().toLowerCase().includes(search.toLowerCase())||
      item["firstName"].toLowerCase().includes(search.toLowerCase()) ||
      item["lastName"].toLowerCase().includes(search.toLowerCase()) ||
      item["email"].toLowerCase().includes(search.toLowerCase())||
      item["phone"].toLowerCase().includes(search.toLowerCase())
    );
  });
 props.onSearch(result);
 setValue("")
}
return (
 <div className="input-group mb-3 mt-3">
<div className="input-group-prepend">
<button
 className="btn btn-outline-secondary"
onClick={() => onSearch(value)}
 >Найти</button>
</div>
 <input type="text" className="form-control" onChange={valueChangeHandler} value={value}
/>
</div>  
);
}

