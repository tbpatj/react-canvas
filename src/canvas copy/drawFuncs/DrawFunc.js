export function drawContext(ctx, frameCount) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.fillStyle = "#000000";
}
export function drawPlayers(ctx, players, myPlayer) {
  for (let i = 0; i < players.length; i++) {
    let curPlay = players[i];
    ctx.beginPath();
    ctx.arc(curPlay.x, curPlay.y, 2, 0, 2 * Math.PI);
    ctx.fill();
  }
  ctx.beginPath();
  ctx.arc(myPlayer.x, myPlayer.y, 2, 0, 2 * Math.PI);
  ctx.fill();
  return null;
}
