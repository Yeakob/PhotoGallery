import React, { useState, useEffect, useRef } from "react";

const DraggableItem = ({
  url,
  alt = "productImage",
  featured = false,
  index,
  id,
  checked,
  order,
  setChecked,
}) => {
  const [hovered, setHovered] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isDragging, setIsDragging] = useState(false)

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleChecked = (e, status) => {
    e.preventDefault();
    setIsChecked(status);
    if (status) {
      setChecked([...checked, { url, alt }]);
    } else {
      let updatedList = checked.filter((item) => item.url !== url);
      setChecked(updatedList);
    }
  };

  const handleDrag = () => {
    setIsDragging(!isDragging)
    setHovered(false)
  }

  
  useEffect(() => {
    if(checked.length === 0) {
      setIsChecked(false)
    } else {
      let isItemChecked = checked.filter(img => img.url === url).length > 0
      if(isItemChecked) {
        setIsChecked(true)
      } else {
        setIsChecked(false)
      }
    }
  }, [checked, url])

  return (
    <div
      draggable={false}
      onDragStart={handleDrag}
      onDragEnd={handleDrag}
      style={{opacity:isChecked ? ".5" : "1"}}
      data-featured={index}
      className={`rounded-lg h-max ${!isDragging && "bg-black"} overflow-hidden cursor-pointer relative border-solid border-2 border-gray-300`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <label
        className={`container ${
          !isDragging && isChecked ? "visible" : !isDragging && hovered ? "visible" : "invisible"
        }`}
      >
        <input type="checkbox" onChange={() => {}} checked={isChecked} />
        <span
          className="checkmark"
          onClick={(e) => handleChecked(e, !isChecked)}
        ></span>
      </label>
      <div
      draggable={false}
        style={{
          opacity: `${isChecked ? "2" : !isDragging && hovered ? "0.5" : "1"}`,
          transition: "opacity .5s",
          transitionTimingFunction: "ease-in-out ",
        }}
        className="bg-white imageContainer"
      >
        <img
          data-featured={index}
          className="image"
          src={url}
          alt={alt}
        />
      </div>
    </div>
  );
};

export default DraggableItem;
