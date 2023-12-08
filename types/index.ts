import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: String;
  btnType?: "button" | "submit";
  containerStyles?: String;
  handleClick: MouseEventHandler;
  textStyles?: String;
  rightIcon?: String;
  isDisabled?: boolean;
}

export interface SearchManufacturerProps {
  manufacturer: String;
  setManufacturer: (manufacturer: String) => void;
}

export interface CarProps {
  city_mpg: Number;
  class: String;
  combination_mpg: Number;
  cylinders: Number;
  displacement: Number;
  drive: String;
  fuel_type: String;
  highway_mpg: Number;
  make: String;
  model: String;
  transmission: String;
  year: Number;
}
