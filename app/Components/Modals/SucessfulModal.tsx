import React from "react";

const SucessfulModal = (props: any) => {
  const handleClose = (e: any) => {
    if (e.target.id === "wrapper") props.onClose();
  };
  return (
    <div
      className="w-[100vw] h-[100vh] fixed overflow-scroll inset-0 bg-black bg-opacity-25 backdrop-blur-sm z-50 flex justify-center items-centers"
      id="wrapper"
      onClick={handleClose}
    >
      <button onClick={props.onClose()}></button>
    </div>
  );
};

export default SucessfulModal;
