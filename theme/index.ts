import { extendTheme } from '@chakra-ui/react';

import { globalStyles as styles } from './styles';

export const theme = extendTheme({
  styles,
  colors: {
    text: 'gray.700',
    primary: 'gray.50',
  },
  fonts: {
    heading: 'Open Sans',
    body: 'Open Sans',
  },
});
