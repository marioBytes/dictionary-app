import { useEffect, useState } from 'react';

import useThemeDetector from '../../../hooks/useThemeDetector';
import { getStorageValue, setStorageValue } from '../../../utils/localStorageHelpers';

const Switch = () => {
  const prefersDarkTheme = useThemeDetector();
  const [theme, setTheme] = useState(prefersDarkTheme ? 'dark' : 'light');

  useEffect(() => {
    const storedTheme = getStorageValue('theme');
    if (!storedTheme) {
      setStorageValue('theme', theme);
      setTheme(theme);
    } else {
      setTheme(storedTheme);
    }

    updateThemeClassList(theme, theme === 'dark' ? 'light' : 'dark');
  }, [theme]);

  const switchTheme = () => {
    const storedTheme = getStorageValue('theme');
    let newTheme;
    let oldTheme;

    if (storedTheme === 'dark') {
      newTheme = 'light';
      oldTheme = 'dark';
    } else {
      newTheme = 'dark';
      oldTheme = 'light';
    }

    setStorageValue('theme', newTheme);
    setTheme(newTheme);
    updateThemeClassList(newTheme, oldTheme);
  };

  const updateThemeClassList = (add, remove) => {
    document.documentElement.classList.add(add);
    document.documentElement.classList.remove(remove);
  };

  return (
    <div>
      <button onClick={switchTheme}>switch</button>
    </div>
  );
};

export default Switch;
