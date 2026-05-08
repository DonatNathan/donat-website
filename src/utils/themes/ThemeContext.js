import React from 'react';

const themes = {
    light: {
        BackgroundColor: '#FFFFFF', 
        SecondBackgroundColor: '#F0F1F3',
        BoldTextColor: '#132238',
        ClassicTextColor: '#556070',
        SubTextColor: '#87909D',
        MainColor: '#EE0000',
    },
    dark: {
        BackgroundColor: '#000000', 
        SecondBackgroundColor: '#111111',
        BoldTextColor: '#FFFFFF',
        ClassicTextColor: '#CCCCCC',
        SubTextColor: '#888888',
        MainColor: '#EE0000',
    },
};

const ThemeContext = React.createContext(themes.light);

export { themes, ThemeContext };