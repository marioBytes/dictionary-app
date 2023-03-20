import { useContext } from 'react';

import { setStorageValue } from '../../../utils/localStorageHelpers';
import FontContext from '../../../contexts/FontContext';

const DropdownItem = ({ cssName, name }) => {
  const { setFont } = useContext(FontContext);

  const handleOnClick = () => {
    setFont(cssName);
    setStorageValue('font', cssName);
  }

  return (
    <div>
      <a href="#" className="font-bold" style={{ fontFamily: cssName }} onClick={handleOnClick}>
        {name}
      </a>
    </div>
  );
};

export default DropdownItem;
