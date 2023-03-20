import React, { useState } from 'react';

import Logo from '../../assets/Logo';
import Dropdown from './dropdown/Dropdown';
import DropdownContext from '../../contexts/DropdownContext';
import Theme from './theme/Theme';

const Topbar = () => {
  return (
    <div className="flex justify-between items-center" style={{ height: '34px' }}>
      {/* logo */}
      <Logo />
      <div className='flex h-full gap-6'>
        {/* dropdown to change font */}
        <DropdownProvider>
          <Dropdown />
        </DropdownProvider>
        <div className="h-full bg-even-lighter-gray opacity-25" style={{ width: '2px' }}/>
        {/* theme switcher */}
        <Theme />
      </div>
    </div>
  );
};

const DropdownProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return <DropdownContext.Provider value={{ isOpen, setIsOpen }}>{children}</DropdownContext.Provider>;
};

export default Topbar;
