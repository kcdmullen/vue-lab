/* Vuetify is set up and themed here, then exported for use
   in main.js */

// Styles
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';

import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import * as labsComponents from 'vuetify/labs/components';

const kcgTheme = {
  /* Vuetify has ways of handing dark and light themes, and 
     just needs to know which one yours is */
  dark: false,
  colors: {
    primaryOld: '0039b3',
    primary: '1C4D8C',
    secondary: '75787B',
    success: '198754',
    info: '1e72fe',
    warning: 'ffc107',
    danger: 'a6032f',
    yada: '851395',
  },
};

const kcgDarkTheme = {
  /* Vuetify has ways of handing dark and light themes, and 
     just needs to know which one yours is */
  dark: true,
  colors: {
    primaryOld: '0039b3',
    primary: '1C4D8C',
    secondary: '75787B',
    success: '198754',
    info: '1e72fe',
    warning: 'ffc107',
    danger: 'a6032f',
    yada: '851395',
  },
};

const vuetify = createVuetify({
  components: {
    ...components,
    ...labsComponents,
  },
  directives,
  theme: {
    defaultTheme: 'kcgDarkTheme',
    themes: {
      kcgTheme,
      kcgDarkTheme,
    },
  },
});
export default vuetify;
