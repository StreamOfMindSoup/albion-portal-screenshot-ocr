import React, { useEffect, useRef } from "react";

const isClose = (x: number[], target: number[], tolerance: number = 5) => {
  return (
    x.map((_, i) => Math.abs(x[i] - target[i])).reduce((a, c) => a + c, 0) <=
    tolerance
  );
};

const Caman = (window as any).Caman;

Caman.Plugin.register("cropPortalPopup", function (this: any) {
  const canvas: HTMLCanvasElement = this.canvas;
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    throw Error("Context is null");
  }
  //   const imageData = ctx.getImageData(left, top, width, height);
  const xColumn = 1578;
  const imageDataColumn = ctx.getImageData(xColumn, 700, 1, 380);

  let streak = 0;
  let offset = 0;
  let top = 0;
  for (let y = 0; y < 380; y++) {
    offset = y * 4;
    const color = Array.from(imageDataColumn.data.slice(offset, offset + 3));
    // console.log(JSON.stringify(color));
    if (isClose(color, [255, 178, 18]) || isClose(color, [143, 109, 45])) {
      streak++;
      if (streak === 14) {
        top = y - streak + 1;
        break;
      }
    } else {
      streak = 0;
    }
  }

  const imageDataRow = ctx.getImageData(1450, 700 + top, 470, 1);

  streak = 0;
  offset = 0;
  let left = 0;
  for (let x = 0; x < 470; x++) {
    offset = x * 4;
    const color = Array.from(imageDataRow.data.slice(offset, offset + 3));
    if (isClose(color, [255, 178, 18]) || isClose(color, [144, 110, 46])) {
      streak++;
      if (streak === 60) {
        console.log("Streak");
        left = x - streak + 1;
        break;
      }
    } else {
      streak = 0;
    }
  }

  this.crop(357, 109, 1450 + left - 16, 700 + top - 59);

  //   const rowCounter = Array(height).fill(0);
  //   const columnCounter = Array(width).fill(0);

  //   let offset = 0;
  //   for (let x = 0; x < width; x++) {
  //     for (let y = 0; y < height; y++) {
  //       offset = x * y * 4;
  //       const r = imageData.data[offset];
  //       const g = imageData.data[offset + 1];
  //       const b = imageData.data[offset + 2];
  //       if (
  //         (r === 255 && g === 178 && b === 18) ||
  //         (r === 144 && g === 110 && b === 46)
  //       ) {
  //         rowCounter[y] += 1;
  //         columnCounter[x] += 1;
  //       }
  //     }
  //   }
});

Caman.Filter.register("cropPortalPopup", function (this: any) {
  this.processPlugin("cropPortalPopup", arguments);
});

Caman.Filter.register("selectByColor", function (
  this: any,
  colors: number[][],
  tolerance?: number
) {
  this.process("selectByColor", function (
    this: any,
    rgba: Record<string, number>
  ) {
    const { r, g, b } = rgba;
    const value = colors
      .map((color) => isClose([r, g, b], color, tolerance))
      .some(Boolean)
      ? 255
      : 0;
    for (const x of ["r", "g", "b"]) {
      rgba[x] = value;
    }
  });
});

const CamanCanvas: React.FC<{
  imageUrl: string;
  camanCallback: () => void;
}> = (props) => {
  const { imageUrl, camanCallback } = props;
  const canvasRef = useRef<HTMLCanvasElement>(
    (null as unknown) as HTMLCanvasElement
  );
  useEffect(() => {
    Caman(canvasRef.current, imageUrl, function (this: any) {
      camanCallback.call(this);
    });
  }, []);
  return <canvas ref={canvasRef} />;
};

export default CamanCanvas;
