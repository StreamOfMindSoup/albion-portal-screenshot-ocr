import React from "react";
import "./App.css";
import ScreenshotStore from "./components/ScreenshotStore";
import Uploader from "./components/Uploader";
import ProcessedScreenshotList from "./components/ProcessedScreenshotList";
import DataBox from "./components/DataBox";
import DataStore from "./components/DataStore";

function App() {
  return (
    <DataStore>
      <ScreenshotStore>
        <Uploader />
        <DataBox />
        <ProcessedScreenshotList />
      </ScreenshotStore>
    </DataStore>
  );
}

export default App;
