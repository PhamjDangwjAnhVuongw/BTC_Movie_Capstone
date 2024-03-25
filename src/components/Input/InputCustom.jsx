//? Cứ cái gì xài trên 2 lần là phải tách component và tách hàm để lưu trữ riêng

import React from "react";

const InputCustom = ({
  id,
  lable,
  placeholder,
  className = "",
  name,
  onChange,
  value,
  onBlur,
  error,
  touched,
  readOnly,
}) => {
  //id sẽ khác nhau giữa các input
  return (
    <div>
      <form>
        <div>
          <label
            htmlFor={id}
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            {lable}
          </label>
          <input
            onBlur={onBlur}
            value={value}
            onChange={onChange}
            type="text"
            name={name}
            readOnly={readOnly ? true : false}
            id={id}
            className={`
            bg-gray-50 border 
            border-gray-300 
            text-gray-900 text-sm rounded-lg 
            focus:ring-blue-500 
            focus:border-blue-500 
            block w-full p-2.5 
            ${className} 
            ${error && touched ? "border-red-500" : ""}`}
            placeholder={placeholder}
          />
          {error && touched ? (
            <p className="text-red-500 text-sm">{error}</p>
          ) : null}
        </div>
      </form>
    </div>
  );
};

export default InputCustom;
