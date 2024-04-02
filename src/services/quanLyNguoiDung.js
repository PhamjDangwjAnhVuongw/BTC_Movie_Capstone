import { http } from "./config";

export const quanLyNguoiDungServ = {
  dangNhap: (data) => {
    //Khi sử dụng các phương thức từ axios đã được config (được cấu hình), tham số đầu tiên sẽ luôn là endpoint cho phần domain gọi tới api, tham số thứ 2 là dữ liệu được gọi lên cho backend
    //Lưu ý: Tham số  này luôn đặt tên là data
    return http.post("/QuanLyNguoiDung/DangNhap", data);
  },
};
