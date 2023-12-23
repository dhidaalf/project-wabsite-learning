import React from "react";

const sizeClasses = {
  txtPoppinsSemiBold13: "font-poppins font-semibold",
  txtPoppinsSemiBold24: "font-poppins font-semibold",
  txtK2DMedium88: "font-kd font-medium",
  txtPoppinsSemiBold48: "font-poppins font-semibold",
  txtPoppinsSemiBold20: "font-poppins font-semibold",
  txtPoppinsBold60: "font-bold font-poppins",
  txtPoppinsRegular20: "font-normal font-poppins",
  txtPoppinsBold40: "font-bold font-poppins",
  txtPoppinsSemiBold40: "font-poppins font-semibold",
  txtPoppinsRegular14: "font-normal font-poppins",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtPoppinsMedium16: "font-medium font-poppins",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
