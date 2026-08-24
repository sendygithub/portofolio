"use client";

import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Link href={"#home"} className="fixed bottom-10 right-10">
      <span
        className={`text-tertiary hover:text-tertiary/80 transition-colors text-4xl font-display ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        ↑
      </span>
    </Link>
  );
};

export default ScrollToTop;
