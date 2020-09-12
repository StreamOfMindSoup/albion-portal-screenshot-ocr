import React, { useContext } from "react";
import OcrRow from "./OcrRow";
import { useCaman } from "../hooks";
import {
  TableRow,
  TableCell,
  Input,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@material-ui/core";
import CamanCanvas from "./CamanCanvas";
import { ScreenshotContext } from "./ProcessedScreenshot";
import { ScreenshotStoreContext } from "./ScreenshotStore";

const field = "size";

const PortalSize: React.FC<{ imageUrl: string }> = (props) => {
  const { imageUrl } = props;
  const camanCallback = function (this: any) {
    this.crop(55, 55);
    const self = this;
    this.render(function () {
      const canvas: HTMLCanvasElement = self.canvas;
      const ctx = canvas.getContext("2d")!;
      const imageData = ctx.getImageData(34, 22, 1, 1);
      const [r, g, b] = Array.from(imageData.data);
      if (r > 160) {
        updateData(screenshot.id, field, "RAID");
      } else if (g > 160) {
        updateData(screenshot.id, field, "SOLO");
      } else if (b > 160) {
        updateData(screenshot.id, field, "GROUP");
      }
    });
  };

  const screenshot = useContext(ScreenshotContext);
  const { updateData, data } = useContext(ScreenshotStoreContext);
  return (
    <TableRow>
      <TableCell>
        <CamanCanvas imageUrl={imageUrl} camanCallback={camanCallback} />
      </TableCell>
      <TableCell>
        <RadioGroup
          row
          value={data && data[screenshot.id] && data[screenshot.id][field] || "MISSING"}
          onChange={(e) => updateData(screenshot.id, field, e.target.value)}
        >
          <FormControlLabel value="SOLO" control={<Radio />} label="2" />
          <FormControlLabel value="GROUP" control={<Radio />} label="7" />
          <FormControlLabel value="RAID" control={<Radio />} label="20" />
        </RadioGroup>
      </TableCell>
    </TableRow>
  );
};

export default PortalSize;
