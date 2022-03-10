import React, { useContext, useEffect, useRef } from "react";
import { DataContext } from "../../context/GlobalData";
import useCanvas from "../hooks/useCanvas";

export default function BackgroundCanvas({ draw, WSC }) {
  const { dispatch, myPlayer } = useContext(DataContext);
  //use our canvas hook to get the base of the canvas elment set up
  const canvasRef = useCanvas(draw);
  //render the canvas
  return (
    <canvas
      onMouseMove={(e) => {
        let rect = canvasRef.current.getBoundingClientRect();
        let newX = e.clientX - rect.left;
        let newY = e.clientY - rect.top;
        dispatch({
          type: "setPlayerPos",
          data: { x: newX, y: newY },
        });
        console.log("sending info to server");
        WSC.send(
          JSON.stringify({
            text: "updatingMyPlay",
            id: myPlayer.id,
            x: newX,
            y: newY,
          })
        );
      }}
      ref={canvasRef}
    />
  );
}
