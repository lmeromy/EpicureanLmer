import React from "react";
import Layout from "../Layout/Layout";
import Footer from "../Footer/Footer";
import HomeIcons from "./HomeIcons";
import "./Home.scss";
import DestinationImage from "../images/undraw_journey_lwlj.png";
import MapsImage from "../images/undraw_connected_world_wuay.png";
import AboutImage from "../images/undraw_super_woman_dv0y.png";
import OtherCoolStuffImage from "../images/undraw_nature_fun_n9lv.png";

const Home = () => {
  const homeImgArray = [
    {
      id: 1,
      info: "Destination Logo",
      path: DestinationImage
    },
    {
      id: 2,
      info: "Maps Logo",
      path: MapsImage
    },
    {
      id: 3,
      info: "About Lmer Logo",
      path: AboutImage
    },
    {
      id: 4,
      info: "Other Cool Stuff Logo",
      path: OtherCoolStuffImage
    }
  ];
  return (
    <div className="layout">
      <Layout />
      <div className="main-home">
        {homeImgArray.map(image => (
          <HomeIcons key={image.id} image={image} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
