import React, { useRef } from 'react'
import Card from './Card';



function Forgrnd() {
  const data = [
    {
      desc:"this is a beutifull card to drag this easily is look like a cool.",
      filesize:".9mb",
      close:false,
      tag:{isOpen:true, tagTitle:"Download now",tagColor:"green",},
    },
    {
      desc:"this is a beutifull card to drag this easily is look like a cool.",
      filesize:".5mb",
      close:false,
      tag:{isOpen:true, tagTitle:"Upload now" ,tagColor:"blue"},
    },
    {
      desc:"this is a beutifull card to drag this easily is look like a cool.",
      filesize:".6mb",
      close:true,
      tag:{isOpen:false, tagTitle:"Extract now"},
    }
  ];
  const ref = useRef(null);
  return (
    <>
      <div ref={ref} className="fixed w-full h-full top-0 left-0 z-[3] flex gap-5 flex-wrap">
        {data.map((item,index)=>(
          <Card data={item} refrence={ref}/>
        ))}
        
      </div>
    </>
  )
}

export default Forgrnd
