import React, { useState, useEffect, useContext } from "react";
import CamanCanvas from "./CamanCanvas";
import { TableRow, TableCell, Input } from "@material-ui/core";
import { ScreenshotStoreContext } from "./ScreenshotStore";
import { ScreenshotContext } from "./ProcessedScreenshot";

const OcrRow: React.FC<{
  imageUrl: string;
  camanCallback: () => void;
  parsed: string;
  progress: number;
  postProcess?: (raw: string) => string;
  field: string;
}> = (props) => {
  const {
    imageUrl,
    camanCallback,
    parsed,
    postProcess = (x: string) => x,
    field,
  } = props;
  const { data, updateData } = useContext(ScreenshotStoreContext);
  const screenshot = useContext(ScreenshotContext);
  useEffect(() => updateData(screenshot.id, field, postProcess(parsed)), [
    postProcess,
    parsed,
  ]);
  return (
    <TableRow>
      <TableCell>
        <CamanCanvas imageUrl={imageUrl} camanCallback={camanCallback} />
      </TableCell>
      <TableCell>
        <Input
          value={data && data[screenshot.id] && data[screenshot.id][field]}
          onChange={(e) => updateData(screenshot.id, field, e.target.value)}
        />
      </TableCell>
    </TableRow>
  );
};

export default OcrRow;
