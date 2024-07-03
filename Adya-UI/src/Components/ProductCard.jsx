import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import Sidebar from "./Sidebar";
import Features from "./Features";
import image from "../assets/image.png";

const cardDetails = {
  title: "HP Pavilion",
  description:
    "HP Pavilion Series of laptops by HP. HP Pavilion is a line of consumer-oriented laptop and desktop computers produced by HP Inc.",
};

const cardData = Array(4).fill(cardDetails);

const prices = ["$50,000/-", "$50,000/-", "$50,000/-", "$50,000/-"];

const ImgMediaCard = () => {
  return (
    <div className="flex">
      <div className="w-1/4 p-4">
        <Sidebar />
      </div>
      <div className="w-3/4 p-4">
        <div className="rounded-2xl bg-blue-50 p-4">
          <Grid container spacing={2}>
            {cardData.map((card, index) => (
              <Grid item key={index} xs={12} sm={6} md={3}>
                <Card sx={{ maxWidth: 200 }}>
                  <div className="relative">
                    <CardMedia component="img" height="140" image={image} />
                    <DeleteIcon className="text-[#FFA27F] absolute -top-3 -right-7 cursor-pointer" />
                    <div className="absolute left-1 top-11">
                      <KeyboardArrowLeftIcon className="text-[#e4e3e4] flex items-center pr-[1px]   " />
                    </div>
                    <div className="absolute right-1 top-10 left-40">
                      <KeyboardArrowRightIcon className="text-[#e4e3e4]  flex items-center ]" />
                    </div>
                  </div>
                </Card>
                <br />
                <Card sx={{ maxWidth: 200 }}>
                  <CardContent>
                    <Typography className="font-lato font-bold text-3xl">
                      <p className="font-lato text-blue-900 text-xl">
                        {card.title}
                      </p>
                    </Typography>
                    <Typography variant="body2">
                      <p className="font-lato text-blue-900">
                        {card.description}
                      </p>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <button className="bg-[#211a66] hover:bg-[#0b0696] transition-colors duration-200 text-white w-full xl:px-[10px] xl:py-[7px] px-[8px] py-[5px] rounded-[6px] font-medium">
                      Buy Now
                    </button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
        <div className="mt-1 bg-blue-50 p-5">
          <div className="flex justify-between mb-1 mt-0">
            {prices.map((price, index) => (
              <span
                key={index}
                className="font-lato font-bold text-blue-900 text-xl"
              >
                {price}
              </span>
            ))}
          </div>
        </div>
        <Features />
      </div>
    </div>
  );
};

export default ImgMediaCard;
