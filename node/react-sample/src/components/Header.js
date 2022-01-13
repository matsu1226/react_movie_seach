import React from "react";

//親コンポーネントからpropsを受け取って、Headerタグをレンダリング
const Header = (props) => { 
  return (
    <header className="App-header">
      <h2>{props.text}</h2>
    </header>
  );
};

export default Header;