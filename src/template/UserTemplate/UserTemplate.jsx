//Sử dụng thư viện toastify
import React, { useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../../components/Loading/Loading";
import { useSelector } from "react-redux";
import useResponsive from "../../hooks/useResponsive";

export const NotifyContext = React.createContext(null);
const UserTemplate = () => {
  const { isMobile, isTablet, isDesktop } = useResponsive();
  console.log(isMobile);
  console.log(isDesktop);
  console.log(isTablet);
  const { isLoading } = useSelector((state) => state.loadingSlice);
  const renderNotify = (notify) => {
    return toast(notify);
  };
  return isDesktop ? (
    <NotifyContext.Provider value={renderNotify}>
      {isLoading ? <Loading /> : null}
      <Outlet />
      <ToastContainer theme="dark" />
    </NotifyContext.Provider>
  ) : (
    <div>Tôi đang ở tablet </div>
  );
};

export default UserTemplate;
