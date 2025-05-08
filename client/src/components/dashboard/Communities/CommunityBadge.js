import React from "react";
import Color, { Palette } from "color-thief-react";

const CommunitiesBadge = (props) => {
  return (
    <Palette
      src={props.src}
      crossOrigin="anonymous"
      format="hex"
      colorCount={2}
    >
      {(data) => {
        if (data.data) {
          const color = getTextColor(data.data[1]);
          return (
            <>
              <div
                className="d-flex myClass cursor-pointer position-relative align-items-center justify-content-center w-100 rounded-3 py-2 my-3 "
                style={{
                  background: `linear-gradient(to right, ${data.data})`,
                  color: `${color}`,
                  padding:"0px 4em 0 4em"
                }}
                onClick={props.onClick}
              >
                <img
                  src={props.src}
                  alt="Banner"
                  height={50}
                  width={50}
                  className="me-3"
                />
                <h5 className="fw-bold m-0 ms-2 text-nowrap">{props.title}</h5>
                {props.currentCommunity && (
                  <hr
                    style={{
                      position: "absolute",
                      height: "10px",
                      backgroundColor: "#f0f0f0",
                      border: "none",
                      bottom: "14px",
                      right: "-50px",
                      width: "50px",
                    }}
                  />
                )}
              </div>
            </>
          );
        }
      }}
    </Palette>
  );
};

function calculateBrightness(r, g, b) {
  return Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));
}

function getTextColor(backgroundColor) {
  const rgb = hexToRgb(backgroundColor);
  const brightness = calculateBrightness(rgb.r, rgb.g, rgb.b);

  return brightness > 130 ? "#000000" : "#FFFFFF"; // Dark text for light backgrounds, and vice versa
}

// Helper function to convert a hex color value to RGB
function hexToRgb(hex) {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

export default CommunitiesBadge;
