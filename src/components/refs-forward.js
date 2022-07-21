// Refs 转发
import React from 'react';
import {logProps} from './hocs'

const FancyButton = props => {
  return <button className="FancyButton">{props.children}</button>;
}

const FancyButtonForwardRef = logProps(FancyButton);

function ForwardRefs(props) {
  return (
    <>
      <FancyButton >正常按钮</FancyButton>
      <FancyButtonForwardRef>转发过的按钮</FancyButtonForwardRef>
    </>
  )
};

export default ForwardRefs;
