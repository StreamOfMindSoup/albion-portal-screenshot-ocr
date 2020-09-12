import React, { useCallback, useState } from "react";
import CamanCanvas from "./CamanCanvas";
import { TableRow, TableCell } from "@material-ui/core";
import ProcessedDestination from "./ProcessedDestination";
import ProcessedRemainingTime from "./ProcessedRemainingTime";
import PortalSize from "./PortalSize";

const PortalPopup: React.FC<{ imageUrl: string }> = (props) => {
  const { imageUrl } = props;
  const [popupObjectUrl, setPopupObjectUrl] = useState("");
  const camanCallback = useCallback(function (this: any) {
    const self = this;
    self.cropPortalPopup();
    self.render(function () {
      (self.canvas as HTMLCanvasElement).toBlob((blob) => {
        setPopupObjectUrl(URL.createObjectURL(blob));
      });
    });
  }, []);
  return (
    <>
      <TableRow>
        <TableCell>
          <CamanCanvas imageUrl={imageUrl} camanCallback={camanCallback} />
        </TableCell>
        <TableCell></TableCell>
      </TableRow>
      {popupObjectUrl && (
        <>
          <ProcessedDestination imageUrl={popupObjectUrl} />
          <ProcessedRemainingTime imageUrl={popupObjectUrl} />
          <PortalSize imageUrl={popupObjectUrl} />
        </>
      )}
    </>
  );
};

export default PortalPopup;
