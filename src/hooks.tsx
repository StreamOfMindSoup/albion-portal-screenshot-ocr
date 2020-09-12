import { useState } from "react";
import ocr from "./logic/ocr";

export function useCaman(processingCallback: () => void) {
  const [parsed, setParsed] = useState("");
  const [progress, setProgress] = useState(0);
  const camanCallback = function (this: any) {
    processingCallback.call(this);
    const self = this;
    this.render(function () {
      const canvas: HTMLCanvasElement = self.canvas;
      canvas.toBlob(async (blob) => {
        const imageUrl = URL.createObjectURL(blob);
        const result = await ocr(imageUrl, setProgress);
        setParsed(result);
      });
    });
  };
  return { parsed, progress, camanCallback };
}
