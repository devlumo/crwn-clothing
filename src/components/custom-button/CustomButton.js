import React from "react";
import { CustomButtonContainer } from "./custom-button.styles.jsx";

export default function CustomButton({ children, ...props }) {
  return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;
}
