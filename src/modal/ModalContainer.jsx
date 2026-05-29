"use client";

import React, { useRef } from "react";

const ModalContainer = ({ children, show, setShow }) => {
  const modalRef = useRef(null);
  const handleClose = (e) => {
    if (modalRef.current == e.target) {
      setShow(false);
    }
  };
  return (
    <>
      {show && (
        <div
          className=" flex flex-col justify-center items-center overflow-y-hidden h-dvh w-dvw bg-[#99999970] fixed top-0 left-0 z-50"
          onClick={handleClose}
        >
          {children}
        </div>
      )}
    </>
  );
};

export default ModalContainer;
