import React from "react";

export default function SkyIcon(props) {
    return (
    <div className="SkyIconContainer">
      <img src={props.url} alt="Sun and clouds at night" className="sky-icon" />
    </div>
  );
}