import { useState } from 'react';

import Topbar from '../components/Topbar/Topbar';
import FontContext from '../contexts/FontContext';

import { getStorageValue } from '../utils/localStorageHelpers';
import '../App.css';

function Root() {
  return (
    <div className="p-6 w-full md:p-10 lg:px-0 lg:py-9 lg:max-w-3xl lg:m-auto">
      <FontProvider>
        <Topbar />
      </FontProvider>
    </div>
  );
}

const FontProvider = ({ children }) => {
  const storedFont = getStorageValue('font');
  const currentFont = storedFont === null ? 'sans-serif' : storedFont;

  const [font, setFont] = useState(currentFont);

  return (
    <FontContext.Provider value={{ font, setFont }}>
      <div style={{ fontFamily: font }}>{children}</div>
    </FontContext.Provider>
  );
};

export default Root;
