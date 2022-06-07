import React, { createContext, useContext, useState, FC, Dispatch, SetStateAction } from 'react';

interface ContextProviderInterface {
  children: React.ReactNode;
};

interface IsClickedInterface {
  chat: boolean;
  cart: boolean;
  userProfile: boolean;
  notification: boolean;
};

type ClickedButton = 'chat' | 'cart' | 'userProfile' | 'notification';
interface AppContextInterface {
  activeMenu: boolean;
  setActiveMenu: Dispatch<SetStateAction<boolean>>;
  isClicked: IsClickedInterface;
  setIsClicked: Dispatch<SetStateAction<IsClickedInterface>>;
  handleClick: (clicked: ClickedButton) => void | null;
};

const initialState: IsClickedInterface = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false
};

const AppContext = createContext<AppContextInterface>({ activeMenu: false, setActiveMenu: () => {}, isClicked: initialState, setIsClicked: () => {}, handleClick: () => {} });

export const ContextProvider: FC<ContextProviderInterface> = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState<boolean>(true);
  const [isClicked, setIsClicked] = useState<IsClickedInterface>(initialState);
  const handleClick = (clicked: string) : void => {
    setIsClicked({
      ...initialState,
      [clicked]: true
    });
  };
  return (
    <AppContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);