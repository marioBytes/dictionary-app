import { useContext } from 'react';

import { setStorageValue } from '../../../utils/localStorageHelpers';

import FontContext from '../../../contexts/FontContext';
import DropdownContext from '../../../contexts/DropdownContext';

const DropdownItem = ({ cssName, name }) => {
  const { setFont } = useContext(FontContext);
  const { setIsOpen } = useContext(DropdownContext);

  const handleOnClick = () => {
    setFont(cssName);
    setStorageValue('font', cssName);
    setIsOpen(false);
  };

  return (
    <div>
      <button
        className="font-bold block w-full text-left py-1 hover:text-purple hover:ease-in-out hover:duration-300 hover:transition-colors ease-in-out duration-300 transition-colors"
        style={{ fontFamily: cssName }}
        onClick={handleOnClick}
      >
        {name}
      </button>
    </div>
  );
};

export default DropdownItem;
