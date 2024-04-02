import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import { quanLyPhimServ } from "../../services/quanLyPhim";
import "./banner.scss";
import { useDispatch } from "react-redux";
import {
  handleOffLoading,
  handleOnLoading,
} from "../../redux/slice/loadingSlice";

const Banner = () => {
  const dispatch = useDispatch();
  const [arrBanner, setArrBanner] = useState([]);
  const contentStyle = {
    margin: 0,
    display: "block",
    width: "100%",
    height: "100vh",
    color: "#9e9e9e",
    lineHeight: "150px",
    textAlign: "center",
  };
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  useEffect(() => {
    dispatch(handleOnLoading());
    quanLyPhimServ
      .getAllBanner()
      .then((res) => {
        console.log(res);
        setArrBanner(res.data.content);
        dispatch(handleOffLoading());
      })
      .catch((err) => {
        console.log(err);
        dispatch(handleOffLoading());
      });
  }, []);

  return (
    <div className="carousel_banner">
      <Carousel
        afterChange={onChange}
        nextArrow={
          <div>
            <i class="fa-sharp fa-regular fa-chevron-right"></i>
          </div>
        }
        prevArrow={
          <div>
            <i class="fa-sharp fa-regular fa-chevron-left"></i>
          </div>
        }
        dots={false}
        arrows={true}
      >
        {arrBanner.map((banner, index) => {
          return (
            <div key={index} className="banner">
              <img className="w-full" src={banner.hinhAnh} alt="" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Banner;
