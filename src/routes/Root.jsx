import { useState } from 'react';

import Topbar from '../components/Topbar/Topbar';
import FontContext from '../contexts/FontContext';

import { getStorageValue } from '../utils/localStorageHelpers';
import '../App.css';

function Root() {
  return (
    <FontProvider>
      <Topbar />
    </FontProvider>
  );
}

const FontProvider = ({ children }) => {
  const storedFont = getStorageValue('font')
  const currentFont = storedFont === null ? 'sans-serif' : storedFont;

  const [font, setFont] = useState(currentFont);

  return (
    <FontContext.Provider value={{ font, setFont }}>
      <div style={{ fontFamily: font }}>
        {children}
      </div>
    </FontContext.Provider>
  )
}

export default Root;
