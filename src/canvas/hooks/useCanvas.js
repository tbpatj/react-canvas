import { useContext, useEffect, useRef } from "react";
import { DataContext } from "../../context/GlobalData";
import { drawPlayers } from "../drawFuncs/DrawFunc";
import resizeCanvas from "./resizeCanvas";

export default function useCanvas(draw) {
  const canvasRef = useRef(null);
  const { players, myPlayer } = useContext(DataContext);

  useEffect(() => {
    //set up the canvas element to render in 2D
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    let frameCount = 0;
    let animationID;

    const render = () => {
      //update the frame count and draw our custom draw function while getting our animation frame;
      frameCount++;
      resizeCanvas(canvas);
      draw(context, frameCount);

      drawPlayers(context, players, myPlayer);
      animationID = window.requestAnimationFrame(render);
    };
    render();
    //clean up the animation frames
    return () => {
      window.cancelAnimationFrame(animationID);
    };
  }, [draw, players, myPlayer]);

  return canvasRef;
}
