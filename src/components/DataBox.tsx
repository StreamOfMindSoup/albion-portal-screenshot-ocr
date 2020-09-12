import React, { useContext } from "react";
import { ScreenshotStoreContext } from "./ScreenshotStore";
import Papa from "papaparse";
import { TextField, Typography } from "@material-ui/core";

const DataBox: React.FC = () => {
  const { data } = useContext(ScreenshotStoreContext);
  const reshaped = Object.values(data);
  const csv = Papa.unparse(reshaped, {
    columns: ["from", "to", "currentTime", "remainingTime", "size"],
  });
  return (
    <>
      <Typography variant="h4">Export your data (updated as the analysis progresses)</Typography>
      <TextField multiline fullWidth label="Data (CSV)" value={csv} />
    </>
  );
};

export default DataBox;
