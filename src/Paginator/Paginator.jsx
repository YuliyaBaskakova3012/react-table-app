import React from 'react';
import ReactPaginate from 'react-paginate';
import _ from 'lodash';
export default props =>{
const pageCount = Math.ceil(props.data.length / props.pageSize)
return(
<div>
{props.data.length > props.pageSize
?<div className="container text-center" style={{display: "flex", width: "400px", justifyContent: "center"}}><ReactPaginate  style={{width: "400px"}}
previousLabel={'<'}
nextLabel={'>'}
breakLabel={'...'}
breakClassName={'break-me'}
pageCount={pageCount}
marginPagesDisplayed={2}
pageRangeDisplayed={5}
onPageChange={props.pageChangeHandler}
containerClassName={'pagination'}
activeClassName={'active'}
pageClassName="page-item"
pageLinkClassName="page-link"
previousClassName="page-item"
nextClassName="page-item"
previousLinkClassName="page-link"
nextLinkClassName="page-link"
forcePage={props.currentPage}
/></div>: null
   } 
</div>
)
 }



