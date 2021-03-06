import React from 'react';

import ControlButton from './ControlButton';

import CameraButton from '../../images/camerabutton.svg';
import HelpButtonFill from '../../images/help-fill.svg';
import HelpButton from '../../images/help.svg';

import FlashButton from '../../images/message.svg';

const ControlButtonContainer = props => {
  const helpButton = props.help === true ? HelpButton : HelpButtonFill  
    const buttons = [
        {
          id: 1,
          image: helpButton ,
          alt: 'help button',
          class: 'controls__helpbtn',
          click: props.displayHelp,
          disabled: props.disabledRes
        },
        {
          id: 2,
          image: CameraButton,
          alt: 'camera shutter button',
          class: 'controls__capturebtn',
          click: props.cameraClick,
          disabled: props.disabled

        },
        {
          id: 3,
          image: FlashButton,
          alt: 'message button',
          class: 'controls__flashbtn',
          path: '/Contact'
        }
      ];

      
  const content = buttons.map(button => (
    <ControlButton
      key={button.id}
      image={button.image}
      alt={button.alt}
      click={button.click}
      disabled={button.disabled}
      class={button.class}
      path={button.path}
    />
  ));
  return <>{ content }</>;
};



export default ControlButtonContainer;
