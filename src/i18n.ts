import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import common_de from "./translations/de/common.json";
import i18next from 'i18next';

i18next.init({
    interpolation: { escapeValue: false },  // React already does escaping
    lng: 'en',                              // language to use
    resources: {
       
        de: {
            common: common_de
        },
    },
});
 