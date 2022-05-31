import Head from 'next/head';
import { Box } from '@chakra-ui/react';

import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => (
    <>
        <Head>
            <title>Real Estate</title>
        </Head>
        <Box w="full" m="auto" paddingTop="25">
            <header>
               <Navbar/>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </Box>
    </>
)

export default Layout;