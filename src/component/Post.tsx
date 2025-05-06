
import React from "react";


type PostProps = {title: string,  auteur: string, datedepub: any, contenue: string, image:string}



export default function Post(props:PostProps) {
    return(
        
        <div className="w-full h-150 my-10 mx-10 bg-white shadow-sm  rounded-t-2xl">
             <img src={props.image} alt="image x"className="w-100 h-80 rounded-t-2xl"/>
            <h1 className="text-green-600 px-2 text-xl font-bold pt-2 pl-13 ">{props.title}</h1><br />

            <p className="text-gray-950 px-3 py-3 items-center justify-content-center">{props.contenue}</p>

            <div className="text-gray-800 px-4 py-4 mt-10 items-left">{props.auteur}</div>

            <span className="text-gray-500 ml-60">{props.datedepub}</span>
        </div>
       
    );
}

