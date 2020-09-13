import React, { useEffect, useContext, useCallback } from "react";
import CamanCanvas from "./CamanCanvas";
import { TableRow, TableCell, Input } from "@material-ui/core";
import { ScreenshotContext } from "./ProcessedScreenshot";
import { DataStoreContext } from "./DataStore";

const OcrRow: React.FC<{
  imageUrl: string;
  camanCallback: () => void;
  parsed: string;
  progress: number;
  field: string;
}> = (props) => {
  const { imageUrl, camanCallback, parsed, field } = props;

  return (
    <TableRow>
      <TableCell>
        <CamanCanvas imageUrl={imageUrl} camanCallback={camanCallback} />
      </TableCell>
      <TableCell>
        <ConnectedInput field={field} parsed={parsed} />
      </TableCell>
    </TableRow>
  );
};

const ConnectedInput: React.FC<{ field: string; parsed: string }> = (props) => {
  const { parsed, field } = props;
  const { data, updateData } = useContext(DataStoreContext);
  const screenshot = useContext(ScreenshotContext);
  useEffect(() => updateData(screenshot.id, field, parsed), [parsed]);
  const value = data && data[screenshot.id] && data[screenshot.id][field];
  const updateHandler = useCallback(
    (e) => updateData(screenshot.id, field, e.target.value),
    [screenshot.id, field]
  );
  return <MemoizedInput value={value} onChange={updateHandler} />;
};

const MemoizedInput = React.memo(Input);

// const MemoizedInput = React.memo((props: any) => {
//   console.log("OcrRow render");
//   return <Input {...props as any} />;
// });

export default OcrRow;
