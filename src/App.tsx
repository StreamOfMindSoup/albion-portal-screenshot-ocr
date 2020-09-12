import React from "react";
import "./App.css";
import ScreenshotStore from "./components/ScreenshotStore";
import Uploader from "./components/Uploader";
import ProcessedScreenshotList from "./components/ProcessedScreenshotList";
import DataBox from "./components/DataBox";

function App() {
  return (
    <ScreenshotStore>
      <Uploader />
      <DataBox />
      <ProcessedScreenshotList />
    </ScreenshotStore>
  );
}

export default App;
