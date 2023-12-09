"use client";

import { CarProps } from "@/types";
import { useState } from "react";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Image from "next/image";
import { generateCarImageUrl } from "@/utils";

interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
  // handleOpenModal: () => void;
}

const style = {
  fontFamily: "inherit",
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: "80%",
  overflow: "auto",
  bgcolor: "background.paper",
  borderRadius: ".85rem",
  boxShadow: 24,
  p: 2,
  "&::-webkit-scrollbar": { display: "none" },
};

const CarDetails = ({
  car,
  isOpen,
  closeModal,
}: // handleOpenModal,
CarDetailsProps) => {
  const [open, setOpen] = useState(isOpen);

  const handleClose = () => {
    setOpen(false);
    closeModal();
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isOpen}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}>
        <Fade in={isOpen}>
          <Box sx={style}>
            <div className="flex-1 flex flex-col gap-3">
              <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                <Image
                  src={generateCarImageUrl(car)}
                  alt="car model"
                  fill
                  priority
                  className="object-contain"
                />
              </div>

              <div className="flex gap-3">
                <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                  <Image
                    src={generateCarImageUrl(car, "29")}
                    alt="car model"
                    fill
                    priority
                    className="object-contain"
                  />
                </div>

                <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                  <Image
                    src={generateCarImageUrl(car, "33")}
                    alt="car model"
                    fill
                    priority
                    className="object-contain"
                  />
                </div>

                <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                  <Image
                    src={generateCarImageUrl(car, "13")}
                    alt="car model"
                    fill
                    priority
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-2 mt-4">
              <Typography
                id="transition-modal-title"
                component="h4"
                variant="h5"
                className="font-semibold text-xl capitalize">
                {car.make} {car.model}
              </Typography>

              <div className="mt-3 flex flex-wrap gap-4">
                {Object.entries(car).map(([key, value]) => (
                  <div
                    className="flex justify-between gap-5 w-full text-right"
                    key={key}>
                    <Typography
                      id="transition-modal-description-key"
                      className="text-gray capitalize">
                      {key.split("_").join(" ")}
                    </Typography>
                    <Typography
                      id="transition-modal-description-value"
                      className="text-black-100 font-semibold">
                      {value}
                    </Typography>
                  </div>
                ))}
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default CarDetails;
