type state = {count: int};

type action =
  | Add
  | Minus;

[@react.component]
let make = (~name) => {
  let (state, dispatch) =
    React.useReducer(
      (state, action) =>
        switch (action) {
        | Add => {count: state.count + 1}
        | Minus => {count: state.count - 1}
        },
      {count: 0},
    );

  let message = "You've clicked " ++ string_of_int(state.count) ++ " times";

  <div>
    <p> {ReasonReact.string("Hello" ++ name ++ "!!!")} </p>
    <button
      style={ReactDOMRe.Style.make(
        ~color="#444444",
        ~fontSize="20px",
        ~marginRight="10px",
        ~cursor="pointer",
        (),
      )}
      onClick={_event => dispatch(Add)}>
      {ReasonReact.string("+")}
    </button>
    <button
      style={ReactDOMRe.Style.make(
        ~color="#444444",
        ~fontSize="20px",
        ~cursor="pointer",
        (),
      )}
      onClick={_event => dispatch(Minus)}>
      {ReasonReact.string("-")}
    </button>
    <div> {ReasonReact.string(message)} </div>
  </div>;
};
