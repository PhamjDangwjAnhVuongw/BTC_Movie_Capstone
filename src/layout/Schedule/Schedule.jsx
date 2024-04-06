//!TAB 1:
import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import { quanLyRapServ } from "../../services/quanLyRap";
import Showtimes from "../../components/Showtimes/Showtimes";

const Schedule = () => {
  const [arrTheater, setArrTheater] = useState([]);
  useEffect(() => {
    quanLyRapServ
      .getAllScheduleInfo()
      .then((res) => {
        console.log(res);
        setArrTheater(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="my-10">
      <h2 className="font-bold text-4xl text-center my-10">
        Danh sách lịch chiếu cụm rạp
      </h2>

      {/* Tab lịch chiếu cụm rạp */}
      <div>
        <Tabs
          tabPosition="left"
          style={{
            height: "550px",
          }}
          items={arrTheater.map((theater, index) => {
            return {
              label: <img className="w-14" src={theater.logo} alt="" />,
              key: theater.maHeThongRap,
              children: <Showtimes theater={theater.lstCumRap} />,
            };
          })}
        />
      </div>
    </div>
  );
};

export default Schedule;
