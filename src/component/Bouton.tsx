import React from "react";

type ButtonType = {
  title: string;
  className: string;
  onClick?: any;
  type: string;
};
export default function Button(props: ButtonType) {
  return (
    <button type="submit" onClick={props.onClick} className={props.className}>
      {props.title}
    </button>
  );
}
