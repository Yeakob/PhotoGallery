import React, {
  useState,
  useEffect,
  useCallback,
  forwardRef,
  useRef,
} from "react";
import DraggableItem from "./draggableItem";
import products from "../../constant/productDetails";
import ContainerHeader from "./containerHeader";
import AddItem from "./addItem";
import { ReactSortable } from "react-sortablejs";

const DraggableContainer = ({ group }) => {
  const [imageList, setImageList] = useState([]);
  const [checked, setChecked] = useState([]);
  const ref = useRef(null);
  const sortableContainerRef = useRef(null);
  useEffect(() => {
    setImageList(products);
  }, []);

  const handleChecked = (items) => {
    setChecked(items);
  };

  const handleDeleteList = (items) => {
    let updatedList = imageList.filter((item) => !items.includes(item.url));
    setImageList(updatedList);
    setChecked([]);
  };

  const handleAddImage = (url) => {
    setImageList([
      ...imageList,
      {
        url,
        alt: "Image",
      },
    ]);
  };

  useEffect(() => {
  }, [imageList, checked]);

  return (
    <div className="w-full xl:w-3/5">
      <ContainerHeader checked={checked} deleteList={handleDeleteList} />
      <div ref={ref}>
        <ReactSortable
          ref={sortableContainerRef}
          list={imageList}
          setList={setImageList}
          animation={150}
          className="sortableContainer w-full h-full p-10 rounded-lg border-solid border border-gray-300 grid grid-cols-2 grid-rows-1 auto-rows-auto sm:grid-cols-3 xl:grid-cols-5 gap-4 xl:gap-7 justify-center rounded-tr-none rounded-tl-none"
        >
          {imageList.map((item, index) => (
            <DraggableItem
              key={item.id}
              url={item.url}
              alt={item.alt}
              featured={index === 0}
              index={index}
              setChecked={handleChecked}
              checked={checked}
            />
          ))}
          <AddItem onAdd={handleAddImage} />
        </ReactSortable>
      </div>
    </div>
  );
};

export default DraggableContainer;
