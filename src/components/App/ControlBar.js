import React from 'react';
import Loadable from 'react-loadable';

// code splitting
const Loading = () => <h1>Loading...</h1>; // loading component

const LoadExpanded = Loadable({
  loader: () => import('./ExpandedControl'),
  loading: Loading,
});

const LoadCollapsed = Loadable({
  loader: () => import('./CollapseControl'),
  loading: Loading,
});
// code splitting

const ControlBar = (props) => {
  const { prediction, disabled, help } = props;

  const control = prediction ? (
    <LoadExpanded
      captureImage={props.captureImage}
      discardImage={props.discardImage}
      prediction={prediction}
      sharePredication={props.sharePredication}
      disabled={disabled}
    />
  ) : (
    <LoadCollapsed
      captureImage={props.captureImage}
      displayHelp={props.displayHelp}
      help={help}
      disabled={disabled}
    />
  );

  return (
    <section
      className={`controls ${
        help || prediction ? 'controls--expanded controls--expandedls' : ''
      }`}
    >
      {control}
    </section>
  );
};

export default ControlBar;
