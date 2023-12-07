"use client";

import Image from "next/image";
import { MouseEventHandler } from "react";

interface CustomButtonProps {
  title: String;
  containerStyles?: String;
  handleClick: MouseEventHandler;
}

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={"button"}
      className={`custom-btn ${containerStyles}`}
      onClick={() => {
        handleClick;
      }}>
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomButton;
