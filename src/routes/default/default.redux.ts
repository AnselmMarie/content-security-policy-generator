/* Node Module */
import { connect } from 'react-redux';
/* Store */
import {
  modifyCheckbox_AC,
  modifyUrl_AC,
  addEmptyUrl_AC,
  deleteUrl_AC,
} from '../../store/csp/csp.action';
import { AppState } from '../../store';
/* Route Content */
import defaultView from './default.view';
import { IDefaultReduxState } from './default.type';

const mapStateToProps = (state: AppState): IDefaultReduxState => {
  return {
    defaultGeneral: state.cspData.defaultGeneral,
    defaultCustom: state.cspData.defaultCustom,
  }
};

const mapDispatchToProps = {
  modifyCheckbox_AC,
  modifyUrl_AC,
  addEmptyUrl_AC,
  deleteUrl_AC,
};

export default connect(mapStateToProps, mapDispatchToProps)(defaultView);