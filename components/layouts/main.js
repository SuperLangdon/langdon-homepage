import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Langdon's homepage" />
        <meta name="author" content="Langdon Lin" />
        <meta name="author" content="澜璒" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Langdon Lin" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@CyberLangdon" />
        <meta name="twitter:creator" content="@CyberLangdon" />
        <meta name="twitter:image" content="https://langdon.one/card.png" />
        <meta property="og:site_name" content="Langdon Lin" />
        <meta name="og:title" content="Langdon Lin" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://langdon.one/card.png" />
        <title>Langdon Lin - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
