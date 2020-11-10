const hiddenMessage = [
  "X",
  "X",
  "X",
  "X",
  "W",
  "X",
  "E",
  "X",
  "X",
  "X",
  "X",
  "X",
  "L",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "L",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  " ",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "D",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "O",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "N",
  "X",
  "X",
  "X",
  "X",
  "E",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  ",",
  "X",
  " ",
  "X",
];

hiddenMessage.forEach((element) =>
  element === "X" ? null : console.log(element)
);

const hiddenMessage2 = [
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "X", "X", "W", "X", "X", "X", "X", "X", "X"],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "I", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "X", "L", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "X", "X", "X", "X", "D", "X", "X", "X", "X"],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "E", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "X", "X", "X", "X", "X", "X", "R", "X", "S.", " "],
];

for (let i = 0; i < hiddenMessage2.length; i++) {
  for (let j = 0; j < hiddenMessage2[i].length; j++) {
    if (hiddenMessage2[i][j] !== "X") {
      console.log(hiddenMessage2[i][j]);
    }
  }
}

const hiddenCode =
  "XXXXXXXXXXXXXXXXXXXXXXXXXXXCXXXXXXXOXXXXXDXXXXXXXXXXXXXXXEXXXX XXXXXXXXXXXXXXX:X0XXXXXXX2XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX3XXXXXX2XXXXXXXXX2XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX4XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX6XXXXXXXXXXXXXXX6XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX7XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX2XXXXXXXXXX8XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX8XXXXXXXXXXX4XXXXXXXXXXXX6XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX4XXXXXXXXXXXXXXXXXXX9XXXX9XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX2XXX4XXXXXXXXXXX6XXXXXXXXX2XXXXXXXX3XXXXXXXX2XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX4XXXXX";

const strCopie = hiddenCode.split("");

strCopie.forEach((element) =>
  element === "X" || element % 2 === 0 ? null : console.log(element)
);