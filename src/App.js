import React from "react";
import './App.css';
import DraggableContainer from './components/DnD/draggableContainer';

export default function App() {
 
  return (
    <div className='flex items-center justify-center mt-5'>
      <DraggableContainer group="list1"/>
    </div>
  )
}