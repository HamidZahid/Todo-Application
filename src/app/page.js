"use client"
import { useState } from "react";

export default function Home() {
  const [Title, setTitle] = useState('')
  const [Desc, setDesc] = useState('')
  return (
    <>
    <h1 className=" p-5 font-bold text-6xl font-mono text-cyan-600 bg-black text-center">Hamid TodoList</h1>
    <input type="text" className="font-bold border-4 border-cyan-400 rounded my-2 px-4" placeholder="Enter Your Description"/>
    <input type="text" className="font-bold border-4 border-cyan-400 rounded my-2 mx-6 px-4" placeholder="Enter Your Information"/>
    <button className="bg-blue-600 font-bold text-2xl my-4 font-mono w-auto h-auto border-4 rounded-2xl p-2">Add Task</button>
    </>
  );
}
