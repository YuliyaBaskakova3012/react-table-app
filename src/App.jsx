import React from 'react';
import TableContainer from './components/Table/TableContainer';
import DataSelectionContainer from './components/DataSelection/DataSelectionContainer';
import FormContainer from './components/Form/FormContainer';
import SearchBarContainer from './components/SearchBar/SearchBarContainer';
import UserChoiceContainer from './components/UserChoice/UserChoiceContainer';
import PaginatorContainer from './components/common/Paginator/PaginatorContainer';
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