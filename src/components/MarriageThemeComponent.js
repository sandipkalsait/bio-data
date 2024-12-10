import React from "react";
import "./MarriageThemeComponent.css";

const MarriageThemeComponent = () => {
  return (
    <div class="wedding-layout">
      <div class="left-side">
        <div class="couple left">
          <div class="head"></div>
          <div class="body"></div>
          <div class="flower"></div>
        </div>
        <h2 class="description">Left Individual</h2>
      </div>

      <div class="middle-section">
        <h1 class="title">💖 Love & Unity 💖</h1>
      </div>

      <div class="right-side">
        <div class="couple right">
          <div class="head"></div>
          <div class="body"></div>
          <div class="flower"></div>
        </div>
        <h2 class="description">Right Individual</h2>
      </div>
    </div>
  );
};

export default MarriageThemeComponent;
