/* Node Module */
import React from 'react';
/* Component Content */
import { mainHeaderMessage, mainHeaderState }from './main.header.state';
import MainHeaderView from './main.header.view';
/* Store */
import {
  DEFAULT_SRC,
  IMG_SRC,
  STYLE_SRC,
  SCRIPT_SRC,
  FRAME_SRC,
  FONT_SRC,
  OBJECT_SRC,
} from '../../store/csp/csp.constants';
/* Component Content */
import { IMainHeaderProps, IMainHeaderState, TCurrentSrc } from './main.header.type';
/* Config */
import { MAIN_HEADER } from '../../configs/constants/content.constants';
import { TGlobalCheckbox } from '../../configs/types/global.type';

class MainHeaderContainer extends React.Component<IMainHeaderProps, IMainHeaderState> {

  /**
   * @prop {object} state
   * @desc state data
   * @memberOf MainHeaderContainer
  */
  state = {
    ...mainHeaderState,
    ...mainHeaderMessage,
  }

  /**
   * @function getImportStatus
   * @desc changes class name based on import status
   * @memberOf MainHeaderContainer
   * @param importCompleted - if import status was already done
   */
  getImportStatus = (importCompleted: boolean): string => {
    return importCompleted ? 'csp-reset-progress' : 'csp-start-progress';
  }

  /**
   * @function checkStatus
   * @desc render the checkbox url view
   * @memberOf MainHeaderContainer
   * @param {object} e - event from the submit
   */
  checkStatus = (e: React.ChangeEvent<any>): void => {
    e.preventDefault();

    this.setState({
      errorMessage: {
        show: false,
        message: '',
      },
      successMessage: {
        show: false,
        message: '',
      }
    });

    const inputData = e.target.elements.cspBreakdownTextArea.value;

    // If data doesn't exist display error
    if (!inputData) {
      this.setState({
        errorMessage: {
          show: true,
          message: MAIN_HEADER.ERROR_MESSAGE_NO_CONTENT,
        }
      });
      return;
    }

    this.importData(inputData);

  }

    /**
   * @function updateCheckbox
   * @desc render the checkbox url view
   * @memberOf MainHeaderContainer
   */
  updateCheckbox = (): void => {
    let checkbox = this.state.reImportCheckbox;
    checkbox.checked = !checkbox.checked;

    this.setState({
      reImportCheckbox: checkbox,
    });
  }

  /**
   * @function importData
   * @desc render the checkbox url view
   * @memberOf MainHeaderContainer
   * @param inputData - input data
   */
  importData = (inputData: string): void => {

    this.props.resetData_AC();

    const srcSplit = inputData.split(';');
    let isSuccess = false;

    srcSplit.forEach((el) => {

      const itemSplit = el.split(' ');
      const length = itemSplit.length;
      let currentSrc = null;

      for (let loop = 0; loop < length; loop++) {

        // Update the current src during the first loop
        if (!currentSrc) {
          currentSrc = this.checkSrcType(itemSplit[loop]);
        }

        // If currentSrc variable exist run code to update content to the store
        if (currentSrc) {
          this.storeData(currentSrc, itemSplit[loop]);
          isSuccess = true;
        }

        // When the loop ends then reset the currentSrc variable for the next loop
        if (loop === length) {
          currentSrc = null;
        }

      }

    });

    // Display Error is not successfully
    if (!isSuccess) {
      this.setState({
        errorMessage: {
          show: true,
          message: MAIN_HEADER.ERROR_MESSAGE_NO_SUCCESS,
        }
      });
    }

    // Update Store and display success message
    if (isSuccess) {
      this.setState({
        importCompleted: true,
        inputData: '',
        successMessage: {
          show: true,
          message: MAIN_HEADER.SUCCESS_MESSAGE,
        }
      });
    }

  }

  /**
   * @function checkSrcType
   * @desc get the correct src type
   * @memberOf MainHeaderContainer
   * @param srcType - src string
   */
  checkSrcType = (srcType: string): TCurrentSrc => {
    const cspData = this.props.cspData;

    switch (srcType) {
      case 'default-src':
        return {
          src: DEFAULT_SRC,
          data: cspData.defaultGeneral,
        };
      case 'img-src':
        return {
          src: IMG_SRC,
          data: cspData.imgGeneral,
        };
      case 'style-src':
        return {
          src: STYLE_SRC,
          data: cspData.styleGeneral,
        };
      case 'script-src':
        return {
          src: SCRIPT_SRC,
          data: cspData.scriptGeneral,
        };
      case 'frame-src':
        return {
          src: FRAME_SRC,
          data: cspData.frameGeneral,
        };
      case 'font-src':
        return {
          src: FONT_SRC,
          data: cspData.fontGeneral,
        };
      case 'object-src':
        return {
          src: OBJECT_SRC,
          data: cspData.objectGeneral,
        };
      default:
        return null;
    }

  }

  /**
   * @function storeData
   * @desc store data based on type of data
   * @memberOf MainHeaderContainer
   * @param currentSrc - current '-src'
   * @param el - element from the csp src
   */
  storeData = (currentSrc: TCurrentSrc, el: string): void => {

    if (el.includes('http')) {
      this.props.addUrl_AC(currentSrc.src, {
        url: el,
      });

    } else if (el.includes('"') || el.includes('data') || el.includes("'")) {
      el = el
            .replace(new RegExp('"', 'g'), '')
            .replace(new RegExp("'", 'g'), '');

      this.props.modifyCheckbox_AC(currentSrc.src, {
        index: this.getIndex(el, currentSrc.data),
        name: el,
      });
    }

  }

  /**
   * @function getIndex
   * @desc get the correct index for the current data
   * @memberOf MainHeaderContainer
   * @param el - element from the csp src
   * @param curSrcData - current src data
   */
  getIndex = (el: string, curSrcData: TGlobalCheckbox[]): number|void => {

    const length = curSrcData.length;

    for (let loop = 0; loop < length; loop++) {
      if (el === curSrcData[loop].val) {
        return loop;
      }
    }

  };

  /**
   * @function render
   * @desc renders the component view
   * @memberOf MainHeaderContainer
  */
  render() {
    return MainHeaderView(this);
  }

}

export default MainHeaderContainer;