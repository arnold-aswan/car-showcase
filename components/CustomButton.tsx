"use client";

import Image from "next/image";
import { MouseEventHandler } from "react";

interface CustomButtonProps {
  title: String;
  btnType?: "button" | "submit";
  containerStyles?: String;
  handleClick: MouseEventHandler;
}

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={() => {
        handleClick;
      }}>
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomButton;
