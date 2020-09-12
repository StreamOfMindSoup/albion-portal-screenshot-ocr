import React from "react";
import ProcessedCluster from "./ProcessedCluster";
import { Table, TableHead, TableCell, TableBody } from "@material-ui/core";
import ProcessedTime from "./ProcessedTime";
import PortalPopup from "./PortalPopup";

export const ScreenshotContext = React.createContext({} as any);

const ProcessedScreenshot: React.FC<{ screenshot: any }> = (props) => {
  const { screenshot } = props;
  const imageUrl = URL.createObjectURL(screenshot.image);
  return (
    <ScreenshotContext.Provider value={screenshot}>
      <Table>
        <TableHead>
          <TableCell>Image</TableCell>
          <TableCell>Parsed</TableCell>
        </TableHead>
        <TableBody>
          <PortalPopup imageUrl={imageUrl} />
          <ProcessedCluster imageUrl={imageUrl} />
          <ProcessedTime imageUrl={imageUrl} />
        </TableBody>
      </Table>
    </ScreenshotContext.Provider>
  );
};

export default ProcessedScreenshot;
