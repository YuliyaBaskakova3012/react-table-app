import React from 'react';

import TableContainer from './Table/TableContainer';
import DataSelectionContainer from './DataSelection/DataSelectionContainer';
import FormContainer from './Form/FormContainer';
import SearchBarContainer from './SearchBar/SearchBarContainer';
import UserChoiceContainer from './UserChoice/UserChoiceContainer';
import PaginatorContainer from './Paginator/PaginatorContainer';

export const App=props => {
  return (
    <div>
    <DataSelectionContainer/>
    <FormContainer/>
    <TableContainer/>
    <PaginatorContainer/>
    <UserChoiceContainer/>
    <SearchBarContainer/>
    </div>
  );
}
export default App;