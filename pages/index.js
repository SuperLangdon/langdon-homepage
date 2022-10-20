import NextLink from 'next/link'

import {
	Divider,
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
	Text,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoTwitter, IoLogoSteam,IoLogoGithub, IoPaperPlaneSharp } from 'react-icons/io5'
import Image from 'next/image'
import styled from "@emotion/styled"

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Quote = styled(Text)`
	font-size: 16px;
	font-family: 'Libre Baskerville';
	font-weight: bold;
	text-align: center;
	margin-top: 1.5em;
`

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
				p={3}
        style="margin-top: 24px"
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m an indie app developer based in Japan!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Hello, I&apos; m <span id="name">Langdon</span><small>[&apos;lændən]</small>
          </Heading>
					<p>Student in Software Engineering | Developer | Tech enthusiast</p>
					<Quote>&ldquo;Arranging 0&apos;s and 1&apos;s in the exact right order.&rdquo;</Quote>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            
            borderStyle="solid"
            borderWidth={4}
						borderColor={useColorModeValue('purple.300', 'orange.200')}
            w="150px"
            h="150px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/langdon.jpg"
              alt="Profile image"
              borderRadius="full"
							width="150px"
							height="150px"
            />
          </Box>
        </Box>
      </Box>

			<Divider my={6} borderColor={useColorModeValue('purple.300', 'orange.200')} />

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Takuya is a freelance and a full-stack developer based in Osaka with a
          passion for building digital services/stuff he wants. He has a knack
          for all things launching products, from planning and designing all the
          way to solving real-life problems with code. When not online, he loves
          hanging out with his camera. Currently, he is living off of his own
          product called{' '}
          . He publishes content for marketing his products and his YouTube
          channel called &quot;
        </Paragraph>
				<Box align="right" my={4}>
					<NextLink href="/works" passHref scroll={false}>
						<Button
							colorScheme={useColorModeValue('purple', 'orange')}
							rightIcon={<ChevronRightIcon />}
						>
							Visit my portfolio
						</Button>
					</NextLink>
				</Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1984</BioYear>
          Born in Osaka (大阪), Japan.
        </BioSection>
        <BioSection>
          <BioYear>2010</BioYear>
          Completed the Master&apos;s Program in the Graduate School of
          Information Science at Nara Institute of Science and Technology
          (奈良先端科学技術大学院大学情報科学研究科修士課程)
        </BioSection>
        <BioSection>
          <BioYear>2010</BioYear>
          Worked at Yahoo! Japan (ヤフー株式会社入社)
        </BioSection>
        <BioSection>
          <BioYear>2012 to present</BioYear>
          Working as a freelancer
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          My Tags
        </Heading>
        <Paragraph>
          Art, Music,{' '}
          <Link href="https://illust.odoruinu.net/" target="_blank">
            Drawing
          </Link>
          , Playing Drums,{' '}
          <Link href="https://500px.com/p/craftzdog" target="_blank">
            Photography
          </Link>
          , Leica, Machine Learning
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>

        <List>
          <ListItem>
            <Link href="https://github.com/SuperLangdon" target="_blank">
              <Button
                variant="ghost"
								colorScheme={useColorModeValue('purple', 'orange')}
                leftIcon={<IoLogoGithub />}
              >
                Langdon Lin@Github
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/CyberLangdon" target="_blank">
              <Button
                variant="ghost"
							colorScheme={useColorModeValue('purple', 'orange')}
                leftIcon={<IoLogoTwitter />}
              >
                澜璒@Twitter
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://t.me/GeniusLangdon" target="_blank">
              <Button
                variant="ghost"
								colorScheme={useColorModeValue('purple', 'orange')}
								leftIcon={<IoPaperPlaneSharp />}
              >
                澜璒@Telegram
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://steamcommunity.com/id/superlangdon" target="_blank">
              <Button
                variant="ghost"
                colorScheme={useColorModeValue('purple', 'orange')}
                leftIcon={<IoLogoSteam />}
              >
                GeniusLangdon@Steam
              </Button>
            </Link>
          </ListItem>
        </List>
        <Box align="center" my={4}>
          <NextLink href="/posts" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme={useColorModeValue('purple', 'orange')}>
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
			<Divider my={6} borderColor={useColorModeValue('purple.300', 'orange.200')} />
    </Container>
  </Layout >
)

export default Home
export { getServerSideProps } from '../components/chakra'
