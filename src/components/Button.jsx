import React from "react";

function Button({
    children,
    type="button",
    bgColor="bg-blue-600",
    textColor="text-white",
    className="",
    ...props
}){
    return (
      
        <button
         className={`${bgColor} ${textColor} ${className} py-2 px-4 rounded-lg`} {...props} >
            {children}
        </button>
    )
}

export default Button;