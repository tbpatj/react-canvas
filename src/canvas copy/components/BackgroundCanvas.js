import React, { useContext, useEffect, useRef } from "react";
import { DataContext } from "../../context/GlobalData";
import useCanvas from "../hooks/useCanvas";

export default function BackgroundCanvas({ draw }) {
  const { dispatch } = useContext(DataContext);
  //use our canvas hook to get the base of the canvas elment set up
  const canvasRef = useCanvas(draw);
  //render the canvas
  return (
    <canvas
      onMouseMove={(e) => {
        let rect = canvasRef.current.getBoundingClientRect();
        dispatch({
          type: "setPlayerPos",
          data: { x: e.clientX - rect.left, y: e.clientY - rect.top },
        });
      }}
      ref={canvasRef}
    />
  );
}
