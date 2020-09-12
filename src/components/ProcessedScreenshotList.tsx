import React, { useContext } from "react";
import { List, ListItem, Typography } from "@material-ui/core";
import { ScreenshotStoreContext } from "./ScreenshotStore";
import ProcessedScreenshot from "./ProcessedScreenshot";

const ProcessedScreenshotList: React.FC = (props) => {
  const { screenshots } = useContext(ScreenshotStoreContext);
  return (
    <>
      <Typography variant="h4">Review and edit results</Typography>
      <List>
        {screenshots.map((ss) => (
          <ListItem key={ss.id}>
            <ProcessedScreenshot screenshot={ss} />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default ProcessedScreenshotList;
