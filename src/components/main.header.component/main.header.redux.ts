/* Node Module */
import { connect } from 'react-redux';
/* Data Store */
import {
  modifyCheckbox_AC,
  addUrl_AC,
  resetData_AC,
} from '../../data.store/actions';
import { AppState } from '../../data.store/reducers';
// import {

// } from '../../data.store/actions/action.constants';
/* Component Content */
import MainHeaderContainer from './main.header.container';

const mapStateToProps = (state: AppState) => {
  return {
    cspData: state.cspData,
  };
}

const mapDispatchToProps = {
  modifyCheckbox_AC,
  addUrl_AC,
  resetData_AC,
}

export default connect(mapStateToProps, mapDispatchToProps)(MainHeaderContainer);