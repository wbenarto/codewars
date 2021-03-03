1--;
function superStreetFighterSelection(fighters, position, moves) {
  console.log(fighters, position, moves);

  // map thru moves, 4 cases,
  // up must stay at top
  // down must stay at bottom
  // end left goes to the most right
  // end right goes to the most left
  // store char hovered

  let cur = position;
  // cur = [position[0]],[position[1]]
  console.log("cur =" + cur, "cur row = " + cur[0], "cur col = " + cur[1]);

  let hovered = [];

  moves.map((e, i) => {
    if (e == "up") {
      console.log("im up");
      // set pointer check if next isnt empty string
      console.log(fighters[cur[0]][cur[1]]);
      console.log("next up = " + fighters[cur[0] - 1][cur[1]]);

      if (fighters[cur[0] - 1][cur[1]] == "") {
        cur = [cur[0], cur[1]];
        hovered.push(fighters[cur[0]][cur[1]]);
      } else if (cur[0] == 0) {
        cur = [cur[0], cur[1]];
        hovered.push(fighters[cur[0]][cur[1]]);
      } else {
        cur = [cur[0] - 1, cur[1]];
        hovered.push(fighters[cur[0] - 1][cur[1]]);
      }
    } else if (e == "down") {
      console.log("dont let me down bitches");
      if (cur[0] == 2) {
        cur = [cur[0], cur[1]];
        hovered.push(fighters[cur[0]][cur[1]]);
      } else {
        cur[0] = cur[0] + 1;
        cur = [cur[0], cur[1]];
        hovered.push(fighters[cur[0]][cur[1]]);
      }
    } else if (e == "left") {
      console.log("Left Side");

      if (fighters[cur[0]][cur[1] - 1] == "") {
        cur[1] = fighters[cur[0]].length - 2;
        cur = [cur[0], cur[1]];
        hovered.push(fighters[cur[0]][cur[1]]);
      } else if (cur[1] == 0) {
        cur[1] = fighters[cur[0]].length - 1;
        cur = [cur[0], cur[1]];
        hovered.push(fighters[cur[0]][cur[1]]);
      } else {
        cur[1] = cur[1] - 1;
        cur = [cur[0], cur[1]];
        hovered.push(fighters[cur[0]][cur[1]]);
      }
    } else if (e == "right") {
      console.log("thats right ");

      if (fighters[cur[0]][cur[1] + 1] == "") {
        cur[1] = 1;
        cur = [cur[0], cur[1]];
        hovered.push(fighters[cur[0]][cur[1]]);
      } else if (cur[1] == fighters[cur[0]].length - 1) {
        cur[1] = 0;
        cur = [cur[0], cur[1]];
        hovered.push(fighters[cur[0]][cur[1]]);
      } else {
        cur[1] = cur[1] + 1;
        cur = [cur[0], cur[1]];
        hovered.push(fighters[cur[0]][cur[1]]);
      }
    } else return;
  });
  console.log(hovered);

  return hovered;
}
