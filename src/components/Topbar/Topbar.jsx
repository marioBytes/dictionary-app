import React, { useState } from 'react';

import Logo from '../../assets/Logo';
import Dropdown from './dropdown/Dropdown';
import DropdownContext from '../../contexts/DropdownContext';

const Topbar = () => {
  return (
    <div className="flex justify-between items-center">
      {/* logo */}
      <Logo />
      <div>
        {/* dropdown to change font */}
        <DropdownProvider>
          <Dropdown />
        </DropdownProvider>
        {/* theme switcher */}
        <div>

        </div>
      </div>
    </div>
  )
}

const DropdownProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </DropdownContext.Provider>
  )
}

export default Topbar
