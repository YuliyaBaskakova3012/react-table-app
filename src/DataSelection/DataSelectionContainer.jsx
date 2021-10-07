import React from 'react';
import {connect} from 'react-redux';
import {dataSelectedThunk} from '../table-reducer';
import DataSelection from './DataSelection';
const DataSelectionContainer=(props)=><>{props.isDataSelected?null:<DataSelection {...props} />} </>
const mapStateToProps = (state) => ({
data: state.table.data,
isDataSelected: state.table.isDataSelected,
isLoading: state.table.isLoading
});
export default connect(mapStateToProps, {dataSelectedThunk})(DataSelectionContainer);