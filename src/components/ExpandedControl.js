import React from 'react';
import ControlButton from '../components/ControlButton';
import CameraButton from '../images/camerabutton.svg';
import RestartIcon from '../images/restart-icon.svg';
import ShareButtton from '../images/share.svg';
import KerbitLogo from '../images/logo-refined-spacing.svg';
import HelpButton from '../images/collapse.svg';
import FlashButton from '../images/flash.svg';
import MapContainer from '../components/MapContainer';

const ExpandedControl = props => {
  const { discardImage, sharePredication, showForm } = props;

  //   const control = props.prediction === 'FURNITURE' ? <MapContainer /> : '';

  const isItRecyclable = (props.prediction !== 'BATTERIES' || props.prediction !== 'TRASH') ? 'HELL YEAH, IT\'S RECYCLABLE' : 'OH NO, IT\'S NOT RECYCLABLE';

  return (
    <section className='controls controls--expanded'>
      <ControlButton
        image={HelpButton}
        alt='help button'
        class='controls__helpbtn'
        disabled={true}
      />
      <ControlButton
        image={CameraButton}
        alt='camera shutter button'
        class='controls__capturebtn controls__capturebtn--disabled'
        disabled={true}
      />
      <ControlButton
        image={FlashButton}
        alt='flash button'
        class='controls__flashbtn'
        disabled={true}
      />
      <div className='response'>
        <header className='response__prediction'>
          <h2> IT 'S... {props.prediction}</h2>
        </header>
        {/* <>{control}</> */}
        <div className='response__recyclable'>
            <p>{isItRecyclable}</p>
        </div>
        <div className='response__location'>

        </div>

        <MapContainer />
        <ControlButton
          image={RestartIcon}
          alt='restart icon'
          click={discardImage}
          class='response__btn response__btn--bottomfirst'
        />
        <ControlButton
          image={ShareButtton}
          alt='share icon'
          class='response__btn response__btn--bottomsecond'
          click={sharePredication}
        />
        <ControlButton
          class='response__btn response__btn--bottomthird'
          click={showForm}
          text={[
            'Did ',
            <img src={KerbitLogo} alt='kerbit logo' key='1' />,
            ' get something wrong?'
          ]}
        />
      </div>
    </section>
  );
};

export default ExpandedControl;
