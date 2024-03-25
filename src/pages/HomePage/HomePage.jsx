//Component dành cho quản lý trang
import React from "react";
import Header from "../../layout/Header/Header";
import Banner from "../../layout/Banner/Banner";
import ListMovie from "../../layout/ListMovie/ListMovie";
import Schedule from "../../layout/Schedule/Schedule";

const HomePage = () => {
  return (
    <div>
      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />
      {/* List Movie */}
      <div className="container">
        <ListMovie />
        <Schedule />
      </div>

      {/* Footer */}

      {/*  */}
    </div>
  );
};

export default HomePage;
