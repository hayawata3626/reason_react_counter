// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";

function Counter(Props) {
  var name = Props.name;
  var match = React.useReducer((function (state, action) {
          if (action) {
            return /* record */[/* count */state[/* count */0] - 1 | 0];
          } else {
            return /* record */[/* count */state[/* count */0] + 1 | 0];
          }
        }), /* record */[/* count */0]);
  var dispatch = match[1];
  var message = "You've clicked " + (String(match[0][/* count */0]) + " times");
  return React.createElement("div", undefined, React.createElement("p", undefined, "Hello" + (name + "!!!")), React.createElement("button", {
                  style: {
                    color: "#444444",
                    cursor: "pointer",
                    fontSize: "20px",
                    marginRight: "10px"
                  },
                  onClick: (function (_event) {
                      return Curry._1(dispatch, /* Add */0);
                    })
                }, "+"), React.createElement("button", {
                  style: {
                    color: "#444444",
                    cursor: "pointer",
                    fontSize: "20px"
                  },
                  onClick: (function (_event) {
                      return Curry._1(dispatch, /* Minus */1);
                    })
                }, "-"), React.createElement("div", undefined, message));
}

var make = Counter;

export {
  make ,
  
}
/* react Not a pure module */
