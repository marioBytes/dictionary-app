import React from 'react';

import Logo from '../../assets/Logo';
import Dropdown from './dropdown/Dropdown';

const Topbar = () => {
  return (
    <div className="flex justify-between items-center">
      {/* logo */}
      <Logo />
      <div>
        {/* dropdown to change font */}
        <Dropdown />
        {/* theme switcher */}
        <div>

        </div>
      </div>
    </div>
  )
}

export default Topbar
