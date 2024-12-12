'use client';

import { ReactElement } from 'react';
import { useColorMode } from '@chakra-ui/react';

export const ThemeToggleButton = (): ReactElement => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <label>
      <input
        type={'checkbox'}
        checked={colorMode === 'dark'}
        onChange={toggleColorMode}
        value={colorMode}
      />
    </label>
  );
};
