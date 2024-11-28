let num = Math.floor(Math.random() * 3) + 1;
$("#card").wScratchPad({
  size: 100, // The size of the brush/scratch.
  bg: `/images/Gpay_Card ${num}.jpg`, // Background (image path or hex color).
  fg: `/images/front.jpg`, // Foreground (image path or hex color).
  cursor: "pointer", // Set cursor.
});