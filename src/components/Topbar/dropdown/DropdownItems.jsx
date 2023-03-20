import DropdownItem from './DropdownItem';

import supportedFonts from '../../../data/supportedFonts';

const DropdownItems = () => {
  const items = supportedFonts.map((font) => (
    <div key={font.id}>
      <DropdownItem cssName={font.cssName} name={font.name} />
    </div>
  ));

  return (
    <div style={{ background: 'var(--white)' }} className="rounded-2xl absolute text-left p-6 w-36 right-3 mt-3">
      {items}
    </div>
  );
};

export default DropdownItems;
