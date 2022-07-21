import React from 'react';

const ThemeContext = React.createContext('白天');
const FontContext = React.createContext('宋体');

function Context() {
  return (
    <>
      <h1>Context 示例</h1>
      <ThemeContext.Provider value="晚上">
        <Child1 />
      </ThemeContext.Provider>
      <FontContext.Provider value="楷体">
        <Child1 />
      </FontContext.Provider>
    </>
  );
}

function Child1(props) {
  return (
    <ThemeContext.Consumer>
      {(value) => (
        <FontContext.Consumer>
          {(font) => <div>theme: {value}; font: {font}</div>}
        </FontContext.Consumer>
      )}
    </ThemeContext.Consumer>
  );
}

export default Context;
