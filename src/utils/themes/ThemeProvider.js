import React, { useState } from 'react';
import { ThemeContext, themes } from './ThemeContext';

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(themes.dark);

    const toggleTheme = () => {
        setTheme(theme === themes.light ? themes.dark : themes.light);
    };

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
