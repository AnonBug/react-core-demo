/**
 * 高阶组件集合。
 * - 所谓高阶组件，是指参数为组件，返回值为新组件的函数。
 * 
 * 高阶组件不是 API ，而是基于 React 特性的一种设计模式。
 */
import React from 'react';

function Demo1(props) {
  const {ref} = props;
  console.log('Demo1 内部：', ref);
  return <button ref={ref}>按钮</button>
}

export const Demo2 = React.forwardRef((props, ref) => {
  console.log('Demo2 内部：', ref);
  return <button ref={ref}>按钮</button>
})

export function logProps(Components) {
  class LogProps extends React.Component {
    componentDidUpdate(prevProps) {
      console.log('old props: ', prevProps);
      console.log('new props: ', this.props);
    }

    render() {
      const {forwardRef, ...res} = this.props;

      return <Components ref={forwardRef} {...res} />
    }

  }

  return React.forwardRef((props, ref) => {
    console.log('回调中收到了 ref:', ref);
    return <LogProps {...props} forwardRef={ref} />

  })
}

export const DemoWrap = logProps(Demo1);
