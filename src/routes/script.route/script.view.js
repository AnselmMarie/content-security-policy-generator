/* Node Module */
import React from 'react';
/* Data Store */
import { SCRIPT_SRC } from '../../store/csp/csp.constants';
/* Component */
import HeadingComponent from '../../components/heading.component';
import GeneralSettingsComponent from '../../components/general.settings.component';
import CustomUrlComponent from '../../components/custom.urls.component';

export default (props) => {
  return (
    <>

      <HeadingComponent heading='h2'>
        Script Source Content
      </HeadingComponent>

      <GeneralSettingsComponent
        type={SCRIPT_SRC}
        modifyCheckbox_AC={props.modifyCheckbox_AC}
        generalData={props.scriptGeneral} />

      <CustomUrlComponent
        type={SCRIPT_SRC}
        addEmptyUrl_AC={props.addEmptyUrl_AC}
        modifyUrl_AC={props.modifyUrl_AC}
        deleteUrl_AC={props.deleteUrl_AC}
        customData={props.scriptCustom} />

    </>
  )
}
