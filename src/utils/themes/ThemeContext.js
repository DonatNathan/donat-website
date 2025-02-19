import React from 'react';

const themes = {
    light: {
        BackgroundColor: '#FFFFFF', 
        SecondBackgroundColor: '#F0F1F3',
        BoldTextColor: '#132238',
        ClassicTextColor: '#556070',
        SubTextColor: '#87909D',
        MainColor: '#4884E8',
    },
    dark: {
        BackgroundColor: '#FFFFFF', 
        SecondBackgroundColor: '#F0F1F3',
        BoldTextColor: '#132238',
        ClassicTextColor: '#556070',
        SubTextColor: '#87909D',
        MainColor: '#4884E8',
    },
};

const ThemeContext = React.createContext(themes.light);

export { themes, ThemeContext };