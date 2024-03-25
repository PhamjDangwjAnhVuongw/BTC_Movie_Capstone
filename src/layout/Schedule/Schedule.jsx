//!TAB 1:
import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import { quanLyRapServ } from "../../services/quanLyRap";
import Showtimes from "../../components/Showtimes";

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
      <h2 className="font-bold text-2xl text-center">
        Danh sách lịch chiếu cụm rạp
      </h2>

      {/* Tab lịch chiếu cụm rạp */}
      <div>
        <Tabs
          tabPosition="left"
          style={{
            height: "550px",
          }}
          //   items={new Array(3).fill(null).map((_, i) => {
          //     const id = String(i + 1);
          //     return {
          //       label: `Tab ${id}`,
          //       key: id,
          //       children: `Content of Tab ${id}`, //Nội dung của từng Tab
          //     };
          //   })}

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
