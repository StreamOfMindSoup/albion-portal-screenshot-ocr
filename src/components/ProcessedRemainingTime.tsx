import React from "react";
import OcrRow from "./OcrRow";
import { useCaman } from "../hooks";

const postProcess = (raw: string) => {
  const x = raw.toLowerCase().replace(/\s/g, "");
  const res = x.match(
    /closesin((?:[0-2]?[0-9]h[0-5][0-9]m)|(?:[0-5]?[0-9]m[0-5][0-9][s8§]))/
  );
  if (!res) return "";
  let value = res[1];
  if (value[value.length - 1] !== "m") {
    value = value.substr(0, value.length - 1) + "s";
  }
  return value;
};

const ProcessedRemainingTime: React.FC<{ imageUrl: string }> = (props) => {
  const { imageUrl } = props;
  const { camanCallback, parsed, progress } = useCaman(function (this: any) {
    this.crop(155, 20, 200, 83);
    // this.gamma(0.8)
    // this.selectByColor(
    //   [
    //     [255, 255, 255],
    //     [255, 78, 57],
    //   ],
    //   128
    // );
    this.invert();
  });
  const postProcessed = React.useMemo(() => postProcess(parsed), [parsed]);
  return (
    <OcrRow
      imageUrl={imageUrl}
      camanCallback={camanCallback}
      parsed={postProcessed}
      progress={progress}
      field="remainingTime"
    />
  );
};

export default ProcessedRemainingTime;
