
import React from "react";
import Link from "next/link";


type PostProps = {id?: any,slug?: string,title: string,  author: string, publishedAt: any, content?: string, image?:string}



export default function Post(props:PostProps) {
    return(
        
        <div className="w-full h-150 my-10 mx-10 bg-white shadow-sm  rounded-t-2xl">
             <Link href={`/view-post/${props.id}/${props.slug}`}>
                 <img src='https://i.ibb.co/YF32rhtG/a740a7a1985a.jpg' alt="image x"className="w-100 h-80 rounded-t-2xl"/>
                 <h1 className="text-green-600 px-2 text-xl font-bold pt-2 pl-13 ">{props.title}</h1><br />

                 <p className="text-gray-950 px-3 py-3 items-center justify-content-center">{props.content}</p>

                 <div className="text-gray-800 px-4 py-4 mt-10 items-left">{props.author}</div>

                 <span className="text-gray-500 ml-60">{props.publishedAt}</span>
             </Link>
        </div>
       
    );
}

