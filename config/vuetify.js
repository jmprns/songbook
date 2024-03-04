import colors from 'vuetify/lib/util/colors'
export default {
    vuetifyOptions: {
        theme: {
            defaultTheme: 'light',
            themes: {
               light: {
                   dark: false,
                   colors: {
                       primary: colors.orange.base
                   }
               }
            }
        }
    },
    moduleOptions: {
        treeshaking: false,
        useIconCDN: false,
        // styles: true,
        autoImport: true,
        useVuetifyLabs: true
    }
}