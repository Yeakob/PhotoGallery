import React, { useState, useEffect } from "react";

const AddItem = ({onAdd}) => {

  const uploadImage = (file) => {
    onAdd(URL.createObjectURL(file));
  };

  const handleClick = event => {
    const { target = {} } = event || {};
    target.value = "";
  };

  return (
    <div className="h-max min-h-[40vw] sm:min-h-[28vw] xl:min-h-[10vw]  bg-white cursor-pointer relative flex items-center justify-center flex-col border-dashed border-2 border-gray-300 ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
        />
      </svg>
      <span className="text-base">Add Images</span>
      <input
        className="h-max min-h-[40vw] sm:min-h-[28vw] xl:min-h-[10vw] w-full absolute top-0 left-0 opacity-0"
        type="file"
        name="file"
        accept="image/*"
        onChange={(event) => {
          uploadImage(event.target.files[0]);
        }}
        onClick={handleClick}
      />
    </div>
  );
};

export default AddItem;
