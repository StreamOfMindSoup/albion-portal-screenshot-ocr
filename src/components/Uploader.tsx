import React, { useContext } from "react";
import { ScreenshotStoreContext } from "./ScreenshotStore";
import { DropzoneArea } from "material-ui-dropzone";
import { v4 as uuid } from "uuid";
import { DataStoreContext } from "./DataStore";

const Uploader: React.FC = () => {
  const { setScreenshots } = useContext(ScreenshotStoreContext);
  const { setData } = useContext(DataStoreContext);
  return (
    <DropzoneArea
      maxFileSize={Infinity}
      filesLimit={Infinity}
      acceptedFiles={["image/*"]}
      onChange={(files) => {
        setScreenshots(files.map((f) => ({ id: uuid(), image: f })));
        setData({});
      }}
      dropzoneText="Drag and drop your screenshots here (1920x1080 and English only). Screenshots must be taken while mousing over a portal on the minimap."
    />
  );
};

export default Uploader;
