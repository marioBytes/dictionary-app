import React from 'react';

import Switch from './Switch';
import IconMoon from '../../../assets/IconMoon';

const Theme = () => {
  return (
    <div className="flex gap-4 items-center">
      <Switch />
      <IconMoon className="stroke-lighter-gray dark:stroke-purple" />
    </div>
  );
};

export default Theme;
