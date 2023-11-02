import React, { useState, useEffect } from "react";

const ContainerHeader = ({ checked, deleteList }) => {
  const handleBulkDelete = () => {
    let urls = [];
    checked.map(item => urls.push(item.url));
    deleteList(urls)
  }
  
  return (
    <div className="header w-full flex justify-between border-style: solid rounded-lg p-3 rounded-br-none rounded-bl-none font-sans rounded-lg border-solid border border-gray-300">
      {checked.length === 0 && (
          <span className="text-xl font-bold ">Gallery</span>
      )}
      {checked.length > 0 && (
        <>
          <div className="relative">
            <label className="checkboxContainer">
              <span className="checkmarkIcon" ></span>
            </label>
            <span className="text-xl font-bold pl-12">{checked.length} File Selected</span>
          </div>
          <span className="text-m text-red-500 hover:underline cursor-pointer" onClick={handleBulkDelete}>Delete file{checked.length > 1 ? "s" :""}</span>
        </>
      )}
    </div>
  );
};

export default ContainerHeader;
