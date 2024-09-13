import styled from "styled-components";
import { ToastContainer, ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ToastHandler = styled(ToastContainer)`
  .Toastify__toast-container {
    z-index: 99999 !important;
  }

  .Toastify__toast {
    background-color: #ededed;
    color: #fff;
    border: 1px solid transparent;
    font-size: 14px;
  }

  .Toastify__toast--info {
    background-color: #f6bf73ff;
    color: #fafafa;
  }

  .Toastify__toast--success {
    background-color: #35b6e7ff;
    color: #fafafa;
  }

  .Toastify__toast--error {
    background-color: #ff6868;
  }
`;

export const defaultToastOption: ToastOptions = {
  position: "top-right",
  autoClose: 2000,
  hideProgressBar: true,
  closeOnClick: true,
  draggable: true,
  pauseOnHover: false,
  closeButton: false,
};

export enum ToastMessageType {
  INFO = "info",
  SUCCESS = "success",
  ERROR = "error",
}
