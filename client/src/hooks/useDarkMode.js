import { useLocalStorage } from './useLocalStorage';
import React, { useEffect } from "react";

export const useDarkMode = () => {
    const [someValue, setSomeValue] = useLocalStorage('dark-mode-enabled')
    useEffect(() => {
        if(someValue === true){
            var element = document.querySelector('body');
            element.classList.add("dark-mode"); 
        }else {
            var element = document.querySelector('body');
            element.classList.remove("dark-mode");
        }
      }, [someValue]);

  
    return [someValue, setSomeValue];
  };
  