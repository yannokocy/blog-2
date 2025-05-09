'use client'

import React from 'react'

import { getPost } from "@/api/post/actions";
import { useParams } from "next/navigation";

export const AffichPost=() => {

  const {id} = useParams();

  const [valeur, setValeur] = React.useState<any[]>([]);


  React.useEffect(() => {

    if (!id) return;
    (async () => {
      try{


      const response = await getPost(id);
      if (response.data.data) {
        setValeur(response.data.data);
      }
      }catch (error) { console.log('erreur de chargement')
      if (!valeur){
        return
        setValeur
      }
    }
    })();
  }, [id]);


  return(
      valeur
  );

};
export default AffichPost;
