import DropdownItem from './DropdownItem';

import supportedFonts from '../../../data/supportedFonts';

const DropdownItems = () => {
  const items = supportedFonts.map((font) => (
    <div key={font.id}>
      <DropdownItem cssName={font.cssName} name={font.name} />
    </div>
  ));

  return (
    <div className="bg-white rounded-2xl absolute text-base md:text-lg text-left p-6 w-36 right-3 mt-3 dark:bg-gray dark:drop-shadow-dropdown">
      {items}
    </div>
  );
};

export default DropdownItems;
