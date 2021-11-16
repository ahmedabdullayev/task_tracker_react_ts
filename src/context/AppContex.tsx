import {createContext} from "react";


export interface IAppState {
    jwt: string | null;
    firstName: string;
    lastName: string;
    role: string;
    setAuthInfo: ( jwt: string | null, firstName: string, lastName: string, role: string) => void;
}

export const initialAppState : IAppState = {
    jwt: null,
    firstName: 'ahmed',
    lastName: '',
    role: '',
    setAuthInfo: (jwt: string | null, firstName: string, lastName: string, role: string): void => {}
}

export const AppContext = createContext<IAppState>(initialAppState);
export const AppContextProvider = AppContext.Provider;
export const AppContextConsumer = AppContext.Consumer;
