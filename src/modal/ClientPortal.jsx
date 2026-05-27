import React, { useEffect, useRef }  from "react";
import { createPortal } from "react-dom";
import ModalContainer from "./ModalContainer";

const ClientPortal = ({ children, selector, show}) => {
  const ref = useRef(null);

  useEffect(() => {
    ref.current = document.getElementById(selector);
  }, [selector]);
  return show && ref.current ? createPortal(<ModalContainer>{children}</ModalContainer>, ref.current) : null;
};

export default ClientPortal;