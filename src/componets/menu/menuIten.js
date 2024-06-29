import React from "react";
function MenuItem({ icon, text, onClick }) {
  return (
    <div onClick={onClick}>

      {icon}
      <h4>{text}</h4>
    </div>
  );
}
export default MenuItem;
