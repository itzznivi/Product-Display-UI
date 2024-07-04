import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { FiMenu, FiX } from "react-icons/fi";
import Sidebar from "./Sidebar";
import Features from "./Features";
import image from "../assets/image.png";

const cardDetails = {
  title: "HP Pavilion",
  description:
    "HP Pavilion Series of laptops by HP. HP Pavilion is a line of consumer-oriented laptop and desktop computers produced by HP Inc.",
  price: "$50,000"
};

const cardData = Array(4).fill(cardDetails);

const prices = ["$50,000/-", "$50,000/-", "$50,000/-", "$50,000/-"];

const ImgMediaCard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex w-screen relative">
      <button
        className="lg:hidden p-2 fixed top-4 left-4 z-50"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>
      <div
        className={`transition-all duration-300 fixed top-0 left-0 h-full bg-white z-40 lg:relative lg:block ${isSidebarOpen ? "w-full" : "hidden lg:w-1/4"
          } p-4 overflow-y-auto`}
      >
        <Sidebar />
      </div>
      <div
        className={`transition-all duration-300 ${isSidebarOpen ? "hidden" : "w-full lg:w-3/4"
          } p-4`}
      >
        <div className="rounded-2xl bg-blue-50 p-4">
          <Grid container spacing={2}>
            {cardData.map((card, index) => (
              <Grid item key={index} xs={12} sm={6} md={3}>
                <Card sx={{ maxWidth: 200 }}>
                  <div className="relative">
                    <CardMedia component="img" height="140" image={image} />
                    <DeleteIcon className="text-[#FFA27F] absolute -top-3 -right-7 cursor-pointer" />
                    <div className="absolute left-1 top-11">
                      <KeyboardArrowLeftIcon className="text-[#e4e3e4] flex items-center pr-[1px]" />
                    </div>
                    <div className="absolute right-1 top-10 left-40">
                      <KeyboardArrowRightIcon className="text-[#e4e3e4] flex items-center" />
                    </div>
                  </div>
                </Card>
                <br />

                <Card sx={{ width: '100%' }}>
                  <CardContent>
                    <Typography className="font-lato font-bold text-3xl w-full">
                      <p className="font-lato text-blue-900 text-xl">
                        {card.title}
                      </p>
                    </Typography>
                    <Typography variant="body2" className="w-full">
                      <p className="font-lato text-blue-900 font-bold align-middle">
                        {card.description}
                      </p>
                    </Typography>
                  </CardContent>
                  <CardActions className="flex justify-center items-center w-full">
                    <button className="bg-[#211a66] hover:bg-[#0b0696] transition-colors duration-200 text-white w-full xl:px-[10px] xl:py-[7px] px-[8px] py-[5px] rounded-[6px] font-medium">
                      Buy Now
                    </button>
                  </CardActions>
                </Card>

                <div className="mt-6">
                  <Typography className="mt-7 font-bold text-3xl bg-blue-50 flex justify-center">
                    <p className=" font-extrabold text-blue-900 text-xl bg-blue-50">
                      {card.price}
                    </p>
                  </Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>

        
        <div className="w-full">
          <Features />
        </div>
      </div>
    </div>
  );
};

export default ImgMediaCard;
