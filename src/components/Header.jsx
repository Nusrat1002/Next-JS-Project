"use client";

import { ShoppingCart, User } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";

const Header = () => {
  const [cart, setCart] = useState(false);
  const [user, setUser] = useState(false);
  const cartRef = useRef(null);
  const userRef = useRef(null);

  useEffect(() => {
    const handleClose = function (e) {
      if (cartRef.current && !cartRef.current.contains(e.target)) {
        setCart(false);
      }
       if (userRef.current && !userRef.current.contains(e.target)) {
        setUser(false);
      }
    };
    document.addEventListener("click", handleClose);
  }, []);

  const handleCart = () => {
    setCart(!cart);
  };
  const handleUser = () => {
    setUser(!user);
  };
  return (
    <div className="flex bg-red-400 px-5 py-3 justify-between">
      <div className="relative" ref={cartRef}>
        <ShoppingCart onClick={handleCart} />
        {cart && (
          <div className="absolute w-100 bg-amber-50 p-10">
            <h2>inner cart</h2>
          </div>
        )}
      </div>
      <div className="relative" ref={userRef}>
        <User onClick={handleUser} />
        <div
          className={`absolute w-100 bg-amber-50 p-10 transition-all ${user ? "right-0" : "right-[-450px]"}`}
        >
          <h2>Account setting</h2>
        </div>
      </div>
    </div>
  );
};

export default Header;