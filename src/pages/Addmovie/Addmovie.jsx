import React, { useState } from "react";
import InputCustom from "../../components/Input/InputCustom";
import { DatePicker, Rate, Switch } from "antd";
import { useFormik } from "formik";
import { quanLyPhimServ } from "../../services/quanLyPhim";

const Addmovie = () => {
  const [image, setImage] = useState();

  const { handleSubmit, handleChange, handleBlur, values, setFieldValue } =
    useFormik({
      initialValues: {
        tenPhim: "",
        trailer: "",
        moTa: "",
        ngayKhoiChieu: "",
        sapChieu: false,
        dangchieu: false,
        hot: false,
        danhGia: 0,
        hinhAnh: "",
      },
      onSubmit: async (values) => {
        try {
          console.log(values);
          //Thực hiện tạo một đối tượng từ 1 lớp đối tượng Formdata
          let formData = new FormData();
          //Sử dụng for in để duyệt object qua từng key và lấy dữ liệu truyền vào formdata
          for (let key in values) {
            if (key == "hinhAnh") {
              formData.append("File", values[key]);
            } else {
              formData.append(key, values[key]);
            }
          }
          const res = await quanLyPhimServ.themPhimUploadHinh(formData);
          console.log(res);
        } catch (error) {}
      },
    });
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InputCustom
          name="tenPhim"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.tenPhim}
          label="Tên phim"
          placeholder="Nhập tên phim"
        />
        <InputCustom
          name="trailer"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.trailer}
          label="Trailer"
          placeholder="Nhập trailer"
        />
        <InputCustom
          name="moTa"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.moTa}
          label="Mô tả"
          placeholder="Nhập Mô tả"
        />
        <div>
          <label htmlFor="">Nhập ngày chiếu </label>
          <DatePicker
            onChange={(datejs, dateString) => {
              console.log(dateString);
              setFieldValue("ngayKhoiChieu", dateString);
            }}
            format="DD/MM/YYYY"
          />
        </div>
        <div>
          <label htmlFor="">Đang chiếu </label>
          <Switch
            onChange={(checked, event) => {
              console.log(checked);
              setFieldValue("dangchieu", checked);
            }}
            value={values.dangchieu}
          />
        </div>
        <div>
          <label htmlFor="">Sắp chiếu </label>
          <Switch
            onChange={(checked, event) => {
              console.log(checked);
              setFieldValue("sapChieu", checked);
            }}
            value={values.sapChieu}
          />
        </div>
        <div>
          <label htmlFor="">Hot </label>
          <Switch
            onChange={(checked, event) => {
              console.log(checked);
              setFieldValue("hot", checked);
            }}
            value={values.hot}
          />
        </div>
        <div>
          <label htmlFor="">Đánh giá </label>
          <Rate
            onChange={(value) => {
              console.log(value * 2);
              setFieldValue("danhGia", value * 2);
            }}
            value={values.danhGia / 2}
            allowHalf
          />
        </div>
        <div>
          <label htmlFor="">Hình ảnh </label>
          <input
            onChange={(event) => {
              let urlImage = URL.createObjectURL(event.target.files[0]);
              console.log(urlImage);
              setImage(urlImage);
              setFieldValue("hinhAnh", event.target.files[0]);
            }}
            type="file"
          />
          <img className="w-40" src={image} alt="" />
        </div>
        <div>
          <button type="submit">Thêm phim</button>
        </div>
      </form>
    </div>
  );
};

export default Addmovie;
