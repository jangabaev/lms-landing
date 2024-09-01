import React, { PropsWithChildren } from "react";

export const Button:React.FC<PropsWithChildren> = ({ children }) => {
  return <button className=" bg-background_blue border-[1px] px-5 py-2 rounded-xl text-button_color text-sm">{children}</button>;
};
