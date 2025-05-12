'use client'

import React from 'react';
import AffichePost from "@/api/post/affiche-post";

type AfficheType={
  content: any;
}
export const useAfficheControler = ()=>{

  const[affiche, setAffiche]=React.useState<AfficheType>({content:""});
  const { onAffiche }= AffichePost();

  React.useEffect(() =>{
    console.log(affiche.content);
  }, [affiche]);

  const changeContent=(value:string)=> setAffiche((prevState)=>{

    return{
      content:value,
    };
  });

  const onClick =async ()=>{
    await onAffiche(affiche)
      .then(() => window.alert("affichage reussi"))
      .catch((error) => window.alert("Echec du chargement"));
  };
  return {
    affiche,
    changeContent,
    onClick,
  };

};


