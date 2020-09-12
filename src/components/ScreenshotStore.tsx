import React, { useState, useCallback } from "react";
import dotProp from "dot-prop-immutable";

const defaultValue = {
  screenshots: [] as any[],
  addScreenshots: (screenshots: any[]) => {},
  setScreenshots: (screenshots: any[]) => {},
  data: {} as Record<string, any>,
  updateData: (id: string, field: string, value: string) => {},
  setData: (data: Record<string, any>) => {}
};
export const ScreenshotStoreContext = React.createContext(defaultValue);

const ScreenshotStore: React.FC = (props) => {
  const { children } = props;
  const [screenshots, setScreenshots] = useState(defaultValue.screenshots);
  const addScreenshots = useCallback((screenshot: any[]) => {
    setScreenshots((current) => [...current, ...screenshot]);
  }, []);
  const [data, setData] = useState<Record<string, any>>({});
  const updateData = useCallback(
    (id: string, field: string, value: string) => {
      setData((current) => {
        return dotProp.set(current, [id, field], value);
      });
    },
    [setData]
  );
  return (
    <ScreenshotStoreContext.Provider
      value={{ screenshots, addScreenshots, setScreenshots, data, updateData, setData }}
    >
      {children}
    </ScreenshotStoreContext.Provider>
  );
};

export default ScreenshotStore;
