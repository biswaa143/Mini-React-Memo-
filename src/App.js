import React, { useState, useCallback, useMemo } from 'react';

import './App.css';
import DemoList from './components/Demo/DemoList';
import Button from './components/UI/Button/Button';
// import Button2 from './components/UI/Button/Button2';

function App() {
  const [listTitle, setListTitle] = useState('My List');
  // const [listTitle2, setListTitle2] = useState('My List2');

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);
  
  // const changeTitleHandler2 = useCallback(() => {
  //   setListTitle2('New Title2');
  // }, []);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);
  // return (
  //   <div>
  // <DemoList title={listTitle2} items={listItems} />
  // <Button2 onClick={changeTitleHandler2}>Change List Title Descending</Button2>
  // </div>
  // )

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>Change List Title Ascending</Button>
      </div>
  );
}

export default App;
