import { extendTheme } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools';

const styles = {
    global: props => ({
        body: {
            bg: mode('#fffdf7', '#202023')(props),
            fontFamily: 'PT Serif, serif'
        }
    })
}

const components = {
    Heading: {
        variants: {
            'section-title': {
                textDecoration: 'underline',
                fontSize: 20,
                textunderlineOffset: 6,
                textDecorationColor: '#525252',
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4,
                fontFamily: 'PT Serif, serif'
            },
            'page-title': {
                fontFamily: 'PT Serif, serif',
                fontSize: 61,
            }
        }
        
    },
    Link: {
        baseStyle: props => ({
            color: mode('#3d7aed', '#ff63c3')(props),
            textunderlineOffset: 3
        })
    }
}

const fonts = {
    header: "'PT Serif, serif'"
}

const colors = {
    glassTeal: '#88ccca'
}

const config = {
    initialColorMode: 'light',
    useSystemColorMode: false
}

const theme = extendTheme({
    config,
    styles,
    components,
    colors,
    fonts
})

export default theme