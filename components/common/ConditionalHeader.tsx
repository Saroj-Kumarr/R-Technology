"use client";

import React, { useState, useEffect } from "react";
import TopBar from "./TopBar";
import Header from "./Header";
import TransparentHeader from "./TranparentHeader";

const ConditionalHeader = () => {
  const [isScrollDown, setIsScrollDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // If pageYOffset > 0, user scrolled down, otherwise at top
      setIsScrollDown(window.pageYOffset > 0);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="mb-[78px]">
      {/* {isScrollDown ? ( */}
      <Header />
      {/* ) : (
        <>
          <TopBar />
          <TransparentHeader />
        </>
      )} */}
    </div>
  );
};

export default ConditionalHeader;
