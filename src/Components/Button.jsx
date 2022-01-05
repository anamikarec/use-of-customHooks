import React, { useContext } from "react";
import { AppContext } from "../Context/AppContextProdiver";

const Button = (props) => {
  let theme = useContext(AppContext);

  // console.log(theme);

  const style = {
    border: "2px solid black",
    borderRadius: "10px"
  };

  // console.log(theme.appTheme);
  return (
    <>
      <div style={{ ...style, ...theme.appTheme }}>{props.label}</div>
      <button onClick={theme.setDark}>Dark</button>
      <button onClick={theme.setLight}>Light</button>
    </>
  );
};

export default Button;
