"use client"


import Image from "next/image";
import { useState } from "react";
import Table from "./Components/Table";






export default function Home() {

  return(
    <>
    <div className="bg lg:h-screen lg:w-screen md:h-screen md:w-screen flex flex-col "> 
    <div className='bg  bg-pink-400 h-screen w-screen flex flex-col items-center '>
      <h1 className='text-white font-bold text-[5vw] '>Todo App</h1>
      <Table></Table>
 
    
      




      
    </div>

    </div>
  
   
    </>




  )
}
