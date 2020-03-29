import React from "react";
import Layout from "../Layout/Layout";
import Footer from "../Footer/Footer";
import HomeIcons from "./HomeIcons";

const Home = () => {
  const homeImgArray = [
    {
      id: 1,
      info: "Destination Logo",
      path: "../../../public/undraw_journey_lwlj.png"
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
