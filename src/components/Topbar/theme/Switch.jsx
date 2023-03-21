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

  const styles = {
    switchContainer: {
      width: '40px',
      height: '20px',
      borderRadius: '50px',
    },
    switch: {
      width: '14px',
      height: '14px',
      borderRadius: '100%',
      top: '3px',
      left: '4px',
      transform: theme === 'dark' ? 'translateX(18px)' : 'translateX(0)',
    },
  };

  return (
    <div
      style={styles.switchContainer}
      className="bg-even-lighter-gray text-even-lighter-gray dark:bg-purple dark:text-purple relative"
      onClick={switchTheme}
    >
      <div style={styles.switch} className="bg-white absolute transition-all ease-in-out" />
    </div>
  );
};

export default Switch;
