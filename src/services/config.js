import axios from "axios";

export const http = axios.create({
  //endpoint
  baseURL: "https://movienew.cybersoft.edu.vn/api", // setup domain sử dụng API
  headers: {
    tokenCybersoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAxMCIsIkhldEhhblN0cmluZyI6IjAxLzA5LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcyNTE0ODgwMDAwMCIsIm5iZiI6MTY5ODY4NTIwMCwiZXhwIjoxNzI1Mjk2NDAwfQ.CPY1b9IiMcklQZ9hjqIzrdiOlQ5YnV4VpzGu_yZr7G0",
  },
  timeout: 30000, //Quá 30s sẽ báo lỗi Dành cho trường hợp muốn API trả ra 1 lỗi khi chờ đợi lâu, cứ hết thời gian mà API chưa chạy thành công thì sẽ báo lỗi
});
