import React from "react";
import OcrRow from "./OcrRow";
import { useCaman } from "../hooks";
import bestCluster from "../logic/bestCluster";

const ProcessedDestination: React.FC<{ imageUrl: string }> = (props) => {
  const { imageUrl } = props;
  const { camanCallback, parsed, progress } = useCaman(function (this: any) {
    this.crop(286, 29, 61, 23);
    this.invert();
    this.greyscale();
    this.threshold(128);
  });
  const postProcessed = React.useMemo(() => bestCluster(parsed), [parsed]);
  return (
    <OcrRow
      imageUrl={imageUrl}
      camanCallback={camanCallback}
      parsed={postProcessed}
      progress={progress}
      field="to"
    />
  );
};

export default ProcessedDestination;
