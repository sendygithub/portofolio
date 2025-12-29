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
    <Link href={"#beranda"} className="fixed bottom-10 right-10">
      <i
        className={`ri-arrow-up-circle-fill ri-4x text-slate-700 hover:text-slate-900 transition-colors ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      ></i>
    </Link>
  );
};

export default ScrollToTop;
