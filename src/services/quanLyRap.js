import { http } from "./config";

export const quanLyRapServ = {
  getAllScheduleInfo() {
    return http.get("/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01");
  },
};
