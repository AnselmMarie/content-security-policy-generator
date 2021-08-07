/* Node Module */
import React from 'react';

import GeneralSettingsComponent from '../../ui/general.settings';
import CustomUrlComponent from '../../ui/custom.urls';
import { STYLE_SRC } from '../../store/csp/csp.constants';

import { IStyleRouteProps } from './style.type';

export default (props: IStyleRouteProps) => {
  return (
    <>
      <div className="row">
        <div className="setting-col col-lg-12 col-xl-3">
          <GeneralSettingsComponent
            type={STYLE_SRC}
            modifyCheckbox_AC={props.modifyCheckbox_AC}
            generalData={props.styleGeneral}
          />
        </div>

        <div className="setting-col col-lg-12 col-xl-9">
          <CustomUrlComponent
            type={STYLE_SRC}
            addEmptyUrl_AC={props.addEmptyUrl_AC}
            modifyUrl_AC={props.modifyUrl_AC}
            deleteUrl_AC={props.deleteUrl_AC}
            customData={props.styleCustom}
          />
        </div>
      </div>
    </>
  );
};