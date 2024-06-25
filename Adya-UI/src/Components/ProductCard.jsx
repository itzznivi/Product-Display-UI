import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import image from "../assets/image.png";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Sidebar from "./Sidebar";
import Features from "./Features";

const cardData = [
  {
    title: "HP Pavilion",
    description:
      "HP Pavilion Series of laptops by HP. HP Pavilion is a line of consumer-oriented laptop and desktop computers produced by HP Inc.",
  },
  {
    title: "HP Pavilion",
    description:
      "HP Pavilion Series of laptops by HP. HP Pavilion is a line of consumer-oriented laptop and desktop computers produced by HP Inc.",
  },
  {
    title: "HP Pavilion",
    description:
      "HP Pavilion Series of laptops by HP. HP Pavilion is a line of consumer-oriented laptop and desktop computers produced by HP Inc.",
  },
  {
    title: "HP Pavilion",
    description:
      "HP Pavilion Series of laptops by HP. HP Pavilion is a line of consumer-oriented laptop and desktop computers produced by HP Inc.",
  },
];

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
                    <DeleteIcon className="absolute -top-3 -right-7 cursor-pointer" />
                  </div>
                </Card>
                <br />
                <Card sx={{ maxWidth: 200 }}>
                  <CardContent>
                    <Typography className="font-lato font-bold text-3xl">
                      <p className="font-lato text-blue-900 text-xl">{card.title}</p>
                    </Typography>
                    <Typography variant="body2">
                      <p className="font-lato text-blue-900">{card.description}</p>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <button className="flex items-center justify-center font-lato ml-3 bg-blue-900 hover:bg-blue-400 text-white font-bold py-3 px-10 rounded-xl">
                      Buy now
                    </button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
        <div className="mt-1 bg-blue-50 p-5">
          <div className="flex justify-between mb-1 mt-0">
            <span className="font-lato font-bold text-blue-900 text-xl">$50,000/-</span>
            <span className="text-blue-900 font-lato font-bold text-xl">$50,000/-</span>
            <span className="text-blue-900 font-bold font-lato text-xl">$50,000/-</span>
            <span className="text-blue-900 font-bold font-lato text-xl">$50,000/-</span>
          </div>
        </div>

        <Features />
      </div>
    </div>
  );
};

export default ImgMediaCard;
