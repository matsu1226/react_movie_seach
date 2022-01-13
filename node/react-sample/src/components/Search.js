import React, { useState } from "react";

const Search = (props) => {
  //Define "useState". Initial value = ""(empty)
  const [searchValue, setSearchValue] = useState("");

  //searchValueに入力値をset
  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);   // e.target => イベントバブルのイベントを開始したDOM要素を返す 
  }

  // reseting searchValue
  const resetInputField = () => {
    setSearchValue("");
  }

  const callSearchFunction = (e) => {
    // preventDefault => ブラウザのデフォルト動作(actionで指定されたURLへのページ遷移＋データ送信)を阻害
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  }

  return (
    <from className="search">
      {/* search window */}
      <input 
        value={searchValue}
        // onChange => fire when changing value in input form
        onChange={handleSearchInputChanges}
        type="text"
      />
      {/* search button */}
      <input 
        onClick={callSearchFunction}
        type="submit"
        value="SEARCH"
      />
    </from>
  );
};

export default Search;