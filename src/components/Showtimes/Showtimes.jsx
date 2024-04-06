//!TAB 2:
import { Tabs } from "antd";
import React from "react";
import "./showtimes.scss";
import moment from "moment";

const Showtimes = ({ theater }) => {
  return (
    <div>
      <Tabs
        style={{ height: "600px" }}
        className="tab_theater"
        tabPosition="left"
        items={theater.map((item, index) => {
          return {
            label: (
              <div className="text-left uppercase label_theater mx-3">
                <h4 className="font-semibold text-green-600 text-lg truncate">
                  {item.tenCumRap}
                  slice()
                </h4>
                <p className="text-gray-500 truncate text-xs">{item.diaChi}</p>
              </div>
            ),
            key: index,
            children: (
              <div>
                {item.danhSachPhim.map((movie, index) => {
                  return (
                    movie.dangChieu && (
                      <div className="flex my-10" key={index}>
                        {/* Hình ảnh */}
                        <div>
                          <img
                            className="w-40 h-full"
                            src={movie.hinhAnh}
                            alt=""
                          />
                        </div>

                        {/* Tên phim: */}
                        <div className="ml-5">
                          <h3 className="mb-3">
                            <span className="bg-red-500 text-white rounded py-1 px-2 mr-3 font-semibold">
                              C18
                            </span>
                            <span className="text-xl font-bold">
                              {movie.tenPhim}
                            </span>
                          </h3>

                          {/* Suất chiếu: */}
                          <div className="grid grid-cols-2 gap-5">
                            {/* Suất chiếu chỉ hiển thị 4 phần tử đầu trong mảng */}
                            {movie.lstLichChieuTheoPhim
                              .slice(0, 4)
                              .map((gioChieu, index) => {
                                return (
                                  <div>
                                    <p className="space-x-3 box-border">
                                      {/* Ngày tháng */}
                                      <span>{moment().format("DD-MM-YY")}</span>

                                      <spam>~</spam>

                                      {/* Giờ chiếu */}
                                      <span>{moment().format("HH:MM")}</span>
                                    </p>
                                  </div>
                                );
                              })}
                          </div>
                        </div>
                      </div>
                    )
                  );
                })}
              </div>
            ),
          };
        })}
      ></Tabs>
    </div>
  );
};

export default Showtimes;
