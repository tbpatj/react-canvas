export default function resizeCanvas(canvas) {
  const { width, height } = canvas.getBoundingClientRect();
  if (canvas.width !== width || canvas.height !== height) {
    const { devicePixelRatio: ratio = 1 } = window;
    const context = canvas.getContext("2d");
    //adjust the actual width and height to the new bounding box
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    //this is for pixel density, scale everything so it looks better
    context.scale(ratio, ratio);
    //let us know that the canvas element was resized
    console.log("changed size");

    return true;
  }
  //nothing changed
  return false;
}
