/**
 * Let's make a game 🕹
 */

type Direction = "up" | "down" | "left" | "right";

type Position = {
  x: number;
  y: number;
};

let position: Position = {
  x: 0,
  y: 0,
};

function move2(direction: Direction): number {
  switch (direction) {
    case "up":
      return position.y++;
    case "down":
      return position.y--;
    case "left":
      return position.x--;
    case "right":
      return position.x++;

    default:
      throw Error("unknown direction");
  }
}

console.log(position); // { x: 0, y: 0}
move2("up");
console.log(position); // { x: 0, y: 1}
move2("down");
console.log(position); // { x: 0, y: 0}
move2("left");
console.log(position); // { x: -1, y: 0}
move2("right");
console.log(position); // { x: 0, y: 0}
