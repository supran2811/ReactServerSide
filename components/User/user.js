import React from 'react';

const user = (props) => (
    <div>
        <style  jsx>
            {
                `
                  p{
                      background:white;
                      border:2px solid red;
                      box-shadow:2px 3px #ccc;
                      text-align:center
                  }
                `
            }
        </style>
        <h1>Name: {props.name}</h1>
        <p>Age : {props.age}</p>
    </div>
);

export default user;