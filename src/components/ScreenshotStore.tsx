import React, { useState, useCallback } from "react";

const defaultValue = {
  screenshots: [] as any[],
  addScreenshots: (screenshots: any[]) => {},
  setScreenshots: (screenshots: any[]) => {},
};
export const ScreenshotStoreContext = React.createContext(defaultValue);

const ScreenshotStore: React.FC = (props) => {
  const { children } = props;
  const [screenshots, setScreenshots] = useState(defaultValue.screenshots);
  const addScreenshots = useCallback((screenshot: any[]) => {
    setScreenshots((current) => [...current, ...screenshot]);
  }, []);
  return (
    <ScreenshotStoreContext.Provider
      value={{ screenshots, addScreenshots, setScreenshots }}
    >
      {children}
    </ScreenshotStoreContext.Provider>
  );
};

export default ScreenshotStore;
