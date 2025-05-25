import { createContext, useContext, useState } from "react";

type LoadingMap = Record<string, boolean>;

const LoadingContext = createContext<{
  loadingMap: LoadingMap;
  setLoading: (key: string, value: boolean) => void;
}>({
  loadingMap: {},
  setLoading: () => {},
});

export const LoadingProvider = ({ children }: { children: React.ReactNode }) => {
  const [loadingMap, setLoadingMap] = useState<LoadingMap>({});

  const setLoading = (key: string, value: boolean) => {
    setLoadingMap((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <LoadingContext.Provider value={{ loadingMap, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);