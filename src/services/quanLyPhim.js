import { http } from "./config";

export const quanLyPhimServ = {
  getAllBanner: () => {
    return http.get("/QuanLyPhim/LayDanhSachBanner");
  },

  getAllMovie: () => {
    return http.get("/QuanLyPhim/LayDanhSachPhim?maNhom=GP03");
  },
  themPhimUploadHinh: (data) => {
    return http.post("/QuanLyPhim/ThemPhimUploadHinh", data);
  },
};
