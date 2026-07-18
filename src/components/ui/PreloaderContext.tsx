import { createContext, useContext } from 'react';

/** True once the preloader has fully exited */
export const PreloaderDoneContext = createContext(false);
export const usePreloaderDone = () => useContext(PreloaderDoneContext);
