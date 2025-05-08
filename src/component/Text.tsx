import React from "react";

type TexteType = { title: string; contenue: string; image: string };

export default function Text(props: TexteType) {
  return (
    <div className="max-w-md  mx-auto p-6 bg-white shadow-2xl ">
      <img src={props.image} alt="image z" className="ml-1 pt-10" />

      <h3 className="font-bold text-blue-800 items-center justify-center underline pt-10 pb-10 text-center">
        {props.title}
      </h3>

      <p className="text-black text-sm leading-relaxed">{props.contenue}</p>
    </div>
  );
}
