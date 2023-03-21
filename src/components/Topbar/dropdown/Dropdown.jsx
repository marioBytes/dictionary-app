import { useContext } from 'react';

import DropdownItems from './DropdownItems';
import IconArrowDown from '../../../assets/IconArrowDown';

import FontContext from '../../../contexts/FontContext';
import DropdownContext from '../../../contexts/DropdownContext';

import { transformFontName } from '../../../utils/transformFontName';

const Dropdown = () => {
  const { font } = useContext(FontContext);
  const { isOpen, setIsOpen } = useContext(DropdownContext);

  return (
    <div className="flex items-center hover:cursor-pointer">
      <div className="relative">
        <div>
          <button className="font-bold flex items-center gap-3 text-base md:text-lg" onClick={() => setIsOpen(!isOpen)}>
            {transformFontName(font)} <IconArrowDown />
          </button>
        </div>
        {isOpen && <DropdownItems />}
      </div>
    </div>
  );
};

export default Dropdown;
