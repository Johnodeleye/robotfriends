import React from 'react'

const Scroll = (props) => {
  return (
    <div style={{ overflowY: 'scroll', border: '5px solid black', height: '800px'}}>
        {props.children}
        <h1>hello world</h1>
    </div>
  );
  //Props.children will return the children in the scroll which is CardList
};

export default Scroll;