import React, { useContext, useState } from "react";
import Papa from "papaparse";
import {
  TextField,
  Typography,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@material-ui/core";
import annotate from "../logic/annotate";
import { DataStoreContext } from "./DataStore";

const rawColumns = ["from", "to", "currentTime", "remainingTime", "size"];
const annotatedColumns = ["from", "fromId", "to", "toId", "currentTime", "remainingTime", "closingDate", "size"];

const DataBox: React.FC = () => {
  const { data } = useContext(DataStoreContext);
  const allData = Object.values(data);
  const filteredData = allData.filter((x) =>
    rawColumns.every((c) => x[c] && x[c] !== "MISSING")
  );
  const incomplete = allData.length - filteredData.length;
  const annotatedData = annotate(filteredData);
  const [format, setFormat] = useState("csv");
  let formatted;
  switch (format) {
    case "csv":
      formatted = Papa.unparse(annotatedData, {
        columns: annotatedColumns,
      });
      break;
    case "json":
      formatted = JSON.stringify(annotatedData, undefined, 2);
      break;
  }
  return (
    <>
      <Typography variant="h4">
        Export your data (complete portals only)
      </Typography>
      <Typography>{incomplete} portal(s) require additional processing (manual annotation may be required)</Typography>
      <RadioGroup
        row
        value={format}
        onChange={(e) => setFormat(e.target.value)}
      >
        <FormControlLabel value="csv" control={<Radio />} label="CSV" />
        <FormControlLabel value="json" control={<Radio />} label="JSON" />
      </RadioGroup>
      <TextField multiline fullWidth label="Data" value={formatted} />
    </>
  );
};

export default DataBox;
