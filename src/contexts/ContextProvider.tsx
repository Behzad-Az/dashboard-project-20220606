import React, { createContext, useContext, useState, FC, Dispatch, SetStateAction } from 'react';

interface AppContextInterface {
  activeMenu: boolean,
  setActiveMenu: Dispatch<SetStateAction<boolean>>
};

interface ContextProviderInterface {
  children: React.ReactNode;
};

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false
};

const AppContext = createContext<AppContextInterface>({ activeMenu: false, setActiveMenu: () => {} });

export const ContextProvider: FC<ContextProviderInterface> = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState<boolean>(true);
  return (
    <AppContext.Provider
      value={{
        activeMenu,
        setActiveMenu
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);