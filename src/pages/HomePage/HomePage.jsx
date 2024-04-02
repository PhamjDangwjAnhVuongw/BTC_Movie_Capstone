//Component dành cho quản lý trang
import React, { useContext } from "react";
import Header from "../../layout/Header/Header";
import Banner from "../../layout/Banner/Banner";
import ListMovie from "../../layout/ListMovie/ListMovie";
import Schedule from "../../layout/Schedule/Schedule";
import { NotifyContext } from "../../template/UserTemplate/UserTemplate";

const HomePage = () => {
  const notify = useContext(NotifyContext);
  return (
    <div>
      {/* Header */}
      <Header />
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
