import { ChakraProvider } from '@chakra-ui/provider';
import Layout from '../components/layouts/main';
import theme from '../libs/theme';
import Fonts from '../components/fonts';
import { AnimatePresence } from 'framer-motion';
import "./styles.css";

const Website = ({ Component, pageProps, router }) => {
    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <Layout router={router}>
                <AnimatePresence exitBeforeEnter initial={true}>
                    <Component {...pageProps} key={router.route} />
                </AnimatePresence>
            </Layout>
        </ChakraProvider>
    )
}

export default Website