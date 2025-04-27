"use client"
import { useState } from "react";

export default function Home() {
  const [Title, setTitle] = useState('')
  const [Desc, setDesc] = useState('')
  const [Maintask, setMaintask] = useState([])

  const Submit = (e) =>{
    e.preventDefault()
    setMaintask([...Maintask, {Title, Desc}])
    setTitle('')
    setDesc('')
  }

  const DeleteHandeler = (i) =>{
    // setDesc('')
    // setTitle('')
    // setMaintask('')
    let copyTask = [...Maintask];
    copyTask.splice(i,1)
    setMaintask(copyTask)
  }
 let render = <h1>There Is No Task</h1>
 
 if (Maintask.length>0) {
  render = Maintask.map((t,i) =>{
    return (
    
      <div className="flex justify-between mb-5 mx-5" key={i}>
      <h5 className="text-2xl font-bold">{t.Title}</h5>
      <h6 className="text-2xl font-bold">{t.Desc}</h6>
      <button className="bg-red-400 text-white px-2 rounded my-2" onClick={()=>{DeleteHandeler(i)}}>Delete</button>
    </div>
    
    )
})}
     
  return (
    <>
    <form onSubmit={Submit}>
    <h1 className=" p-5 font-bold text-6xl font-mono text-cyan-600 bg-black text-center">Hamid TodoList</h1>
    <input type="text" className="font-bold border-4 border-cyan-400 rounded my-2 mx-6 px-2" placeholder="Enter Your Title" value={Title} onChange={(e)=>{
      setTitle(e.target.value)
    }}/>
    <input type="text" className="font-bold border-4 border-cyan-400 rounded my-2 mx-2 px-2" placeholder="Enter Your Description" value={Desc} onChange={(e)=>{
      setDesc(e.target.value)
    }}/>
    <button className="bg-black text-white font-bold my-4 mx-4 w-auto h-auto border-4 p-2">Add Your Task</button>
    </form> 
    <hr />
    <div className="bg-amber-100 font-bold">
    {render}
    </div>
    </>
  );
}
