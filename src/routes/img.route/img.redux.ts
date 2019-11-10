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
import ImgView from './img.view';

const mapStateToProps = (state: AppState): any => {
  return {
    imgGeneral: state.cspData.imgGeneral,
    imgCustom: state.cspData.imgCustom,
  }
};

const mapDispatchToProps = {
  modifyCheckbox_AC,
  modifyUrl_AC,
  addEmptyUrl_AC,
  deleteUrl_AC,
};

export default connect(mapStateToProps, mapDispatchToProps)(ImgView);