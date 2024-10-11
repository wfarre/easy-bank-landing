import React from "react";

const Button = () => {
  return (
    <button
      className="from-lime-green to-bright-cyan after: content-[' '] relative overflow-hidden rounded-full bg-gradient-to-r px-8 py-3 text-sm font-bold text-white after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-white after:opacity-0 hover:after:opacity-50"
      onClick={() => console.log("click")}
    >
      Request Invite
    </button>
  );
};

export default Button;
