import React from 'react';
import _ from 'lodash';
export const sortD =(sortField, data, sort, sortDirection) => {
 const cloneData =  data.concat();
const sort1 = sort === 'desc' ? 'asc' : 'desc';
const sortDirection1 =sortDirection === 'fa fa-arrow-up' ? 'fa fa-arrow-down' : 'fa fa-arrow-up';
const  data1 = _.orderBy(cloneData, sortField, sort);
return [sortField, data1, sort1, sortDirection1]
}
export default sortD;