import { toast, ToastOptions } from "react-toastify";
import { ReactNode } from "react";
import { defaultToastOption } from "./toastHandler";
import { FaCheck } from "react-icons/fa";
import { BiSolidError } from "react-icons/bi";
import { LuInfo } from "react-icons/lu";

export const Toast = {
  info: (message: ReactNode, options: ToastOptions = {}) => {
    toast.info(message, {
      ...defaultToastOption,
      icon: <LuInfo size={20} color={""} />,
      ...options,
    });
  },
  success: (message: ReactNode, options: ToastOptions = {}) => {
    toast.success(message, {
      ...defaultToastOption,
      icon: <FaCheck size={16} color={"#fafafa"} />,
      ...options,
    });
  },
  error: (message: ReactNode, options: ToastOptions = {}) => {
    toast.error(message, {
      ...defaultToastOption,
      icon: <BiSolidError size={20} color={""} />,
      ...options,
    });
  },
};
