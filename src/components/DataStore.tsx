import React, { useState, useCallback } from "react";
import dotProp from "dot-prop-immutable";

const defaultValue = {
  data: {} as Record<string, any>,
  updateData: (id: string, field: string, value: string) => {},
  setData: (data: Record<string, any>) => {},
};
export const DataStoreContext = React.createContext(defaultValue);

const DataStore: React.FC = (props) => {
  const { children } = props;
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
    <DataStoreContext.Provider value={{ data, updateData, setData }}>
      {children}
    </DataStoreContext.Provider>
  );
};

export default DataStore;
