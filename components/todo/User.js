import React from "react";

const User = ({ isDragging, children , prop1 , prop2 , prop3 }) => {
  return (
    <div 
      className={`${
        isDragging ? "bg-[#fcfcb6] shadow-lg" : "bg-[#fafacf] shadow-sm"
      } p-2 cursor-grab rounded mb-1 mt-1 select-none`}
      ref={prop1}
      {...prop2}
      {...prop3}
    >
      {children}
    </div>
  );
};

export default User;
