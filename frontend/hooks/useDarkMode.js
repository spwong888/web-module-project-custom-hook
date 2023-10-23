import { useState } from 'react';

const useDarkMode = (initialValue) => {
    const [darkMode, setDarkMode] = useState("darkMode", initialValue); 
    return [darkMode, setDarkMode];
};

export default useDarkMode;