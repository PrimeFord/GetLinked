import React from "react";

const RegisterModal = (props: any) => {
  if (!props.isVisible) return null;

  const handleClose = (e: any) => {
    if (e.target.id === "wrapper") props.onClose();
  };
  return (
    <div
      className="w-[100vw] h-[100vh] fixed overflow-scroll inset-0 bg-[#150e28] bg-opacity-80 backdrop-blur-sm z-50 flex justify-center items-center"
      id="wrapper"
      onClick={handleClose}
    >
      <div className=" flex flex-col justify-center items-center text-center py-8 lg:p-[2rem] px-6 h-[80%] w-[85%] lg:w-[40%] border-2 border-solid border-[#D434FE] rounded-[0.25rem] gap-3">
        <div>
          <img
            className="w-[20rem]"
            src="/images/congratulation.png"
            alt="congratulation"
          />
        </div>
        <h2
          className={`text-[1.5rem] lg:text-[1.25rem] mb-[-1rem] ${props.class}`}
        >
          Congratulations
        </h2>
        <h2 className={`text-[1.5rem] lg:text-[1.25rem] ${props.class}`}>
          you have successfully Registered!{" "}
        </h2>
        <p
          className={`lg:w-[50%] text-[0.85rem] lg:text-[0.85rem] ${props.class}`}
        >
          Yes, it was easy and you did it! check your mail box for next step
        </p>
        <button
          className="w-[100%] h-[3rem] rounded-[0.25rem] bg-gradient-to-r from-[#D434FE] to-[#903AFF] hover:border hover:border-[#903AFF] hover:bg-clip-text hover:text-transparent hover:border-6 hover:text-[1.1rem]"
          onClick={() => props.onClose()}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default RegisterModal;
