import React, { useContext } from "react";
import { ScreenshotStoreContext } from "./ScreenshotStore";
import { DropzoneArea } from "material-ui-dropzone";
import { v4 as uuid } from "uuid";

const Uploader: React.FC = (props) => {
  const { setScreenshots, setData } = useContext(ScreenshotStoreContext);
  return (
    <DropzoneArea
      maxFileSize={Infinity}
      filesLimit={Infinity}
      acceptedFiles={["image/*"]}
      onChange={(files) => {
        setScreenshots(files.map((f) => ({ id: uuid(), image: f })));
        setData({});
      }}
      dropzoneText="Drag and drop your screenshots here (1920x1080 and English only)"
    />
  );
};

export default Uploader;
