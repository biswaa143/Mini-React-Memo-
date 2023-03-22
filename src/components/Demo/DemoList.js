import React, { useMemo } from "react";

import classes from "./DemoList.module.css";

const DemoList = (props) => {
  const { items } = props;

  const sortedList = useMemo(() => {
    console.log("Items sorted");
    return items.sort((a, b) => a - b);
  }, [items]);
  console.log("DemoList RUNNING");

//   const sortedList2 = useMemo(() => {
//     console.log("Item sorted in descending");
//     return items.sort((a, b) => b - a);
//   }, [items]);

  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {/* <ul>
        {sortedList2.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default React.memo(DemoList);
