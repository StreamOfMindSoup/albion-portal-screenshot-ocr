import React from "react";
import OcrRow from "./OcrRow";
import { useCaman } from "../hooks";
import bestCluster from "../logic/bestCluster";

const ProcessedCluster: React.FC<{ imageUrl: string }> = (props) => {
  const { imageUrl } = props;
  const { camanCallback, parsed, progress } = useCaman(function (this: any) {
    this.crop(167, 25, 1668, 1035);
    this.greyscale();
    this.threshold(128);
  });
  return (
    <OcrRow
      imageUrl={imageUrl}
      camanCallback={camanCallback}
      parsed={parsed}
      progress={progress}
      postProcess={bestCluster}
      field="from"
    />
  );
};

export default ProcessedCluster;
