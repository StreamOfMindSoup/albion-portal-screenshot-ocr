import React from "react";
import OcrRow from "./OcrRow";
import { useCaman } from "../hooks";

const postProcess = (raw: string) => {
  const x = raw.replace(/\s/g, "");
  const res = x.match(/(\d\d:\d\d)/);
  if (!res) return "";
  return res[1];
};

const ProcessedTime: React.FC<{ imageUrl: string }> = (props) => {
  const { imageUrl } = props;
  const { camanCallback, parsed, progress } = useCaman(function (this: any) {
    this.crop(54, 25, 1836, 1035);
    this.greyscale();
    this.threshold(128);
  });
  return (
    <OcrRow
      imageUrl={imageUrl}
      camanCallback={camanCallback}
      parsed={parsed}
      progress={progress}
      postProcess={postProcess}
      field="currentTime"
    />
  );
};

export default ProcessedTime;
