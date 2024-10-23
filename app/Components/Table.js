"use client"

import React, { useState } from 'react'


const Table = () => {


  const [show,setshow]=useState(false)
  const [name,setname]=useState("")
  const [disc,setdisc]=useState("")
  const [date,setdate]=useState()
  const [time,settime]=useState()
  const [Data,setData]=useState([])

  const prinData =((e)=>{
    e.preventDefault()
   setname('')
   setdisc('')
   setdate()
   settime()
   setData([...Data , {name , disc , date , time}])

   console.log(Data)
   setshow(!show)



  })






  const Show= <div className="bg-pink-200   lg:w-[400px] lg:h-[200px] absolute z-10 top-20  rounded w-[350px] h-[200px] flex flex-col items-center gap-2">

    <span className='text-pink-600'>Enter Todo Data</span>

    <input type="text" className="text-black rounded" placeholder='Todo Name' value={name} onChange={((e)=>{
      setname(e.target.value)
    })}/>
    <input type="text" className="text-black rounded" placeholder='Todo Discription ' value={disc} onChange={((e)=>{
      setdisc(e.target.value)
    })}/>
    <input type="date" className="text-black rounded" value={date} onChange={((e)=>{
      setdate(e.target.value)
    })}/>
    <input type="time" name="" id="" className='text-black' value={time} onChange={((e)=>{
      settime(e.target.value)
    })}/>
    <button className="submit bg-pink-500 text-black rounded p-1" onClick={prinData}>Submit</button>

  </div>
  
  const deletetask = (i) =>{
    let copy =[...Data]
    copy.splice(i)
    setData(copy)
  }


  return (
    <div className='relative bg-pink-200 lg:w-[90vw] lg:h-[70%] h-[90%] w-[80%] flex flex-col items-center'>

      <div className="  box flex flex-row items-center gap-2 mt-2">

      <h2 className='text-black h-[50pxpx] border-b-2 border-black'>Add Your Task Here</h2>

     <button className=" bg-pink-500  h-[50px] w-[50px] rounded-full flex flex-row justify-center items-center  text-[30px]" onClick={(()=>{
      setshow(!show)
     })}>{show ? 'X' :'+'}</button></div>

    {show ? Show : ''}



    <div className="layers w-[380px] h-[600px] bg-transparent  overflow-y-scroll ">


      {
        Data.map((data,i)=>{

          return(

          
      <div className="bg-pink-500 w-full h-[200px] rounded-md p-3 flex flex-col gap-4 mt-2" key={i}>


        <div className="flex flex-row gap-4">

      <span>{data.name}</span> <span>On Date {data.date}</span> <span>At Time {data.date}</span>

      </div>

      <button className="bg-slate-200 h-5 text-black rounded-lg" onClick={(()=>{
        deletetask(i)
      })}>Delete</button>


      <div className="bg-white w-full h-auto rounded text-pink-600">
        {data.disc}
      </div>

    </div>
    


          )



        })
      }


    </div>

     


      
    </div>
  )
}

export default Table
