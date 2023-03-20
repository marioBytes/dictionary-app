import { useContext, useState } from 'react';

import DropdownItems from './DropdownItems';
import IconArrowDown from '../../../assets/IconArrowDown';

import FontContext from '../../../contexts/FontContext';
import { transformFontName } from '../../../utils/transformFontName';

const Dropdown = () => {
  const { font } = useContext(FontContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div>
        <button className="font-bold flex items-center gap-3" onClick={() => setIsOpen(!isOpen)}>
          {transformFontName(font)} <IconArrowDown />
        </button>
      </div>
      {isOpen && <DropdownItems />}
    </div>
  );
};

export default Dropdown;
