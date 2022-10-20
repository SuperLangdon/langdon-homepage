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
	font-size: 24px;
	font-family: 'Noto Serif HK';
	font-weight: regular;
	text-align: center;
	margin-top: 1.5em;
`

const Home = () => (
  <Layout>
		<Container maxW="container.md">
      <Box
        borderRadius="lg"
        mb={6}
        mt={6}
				p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hi there, I&apos;m Langdon, an amateur developer, lecturer and independent writer.
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
        <Heading as="h2" variant="page-title">
            Langdon Lin &#40;&ldquo;澜璒&rdquo;&#41;
          </Heading>
					<p>Amateur developer | Lecture | Independent Writer</p>
					<Quote>&ldquo; 而浮生若梦，为欢几何&#65311; &rdquo;</Quote>
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
          Bio
        </Heading>
        <Paragraph>
        Hi, my real name is <strong>Langdon Lin</strong> but I prefer the name <strong>&apos;澜璒&apos;</strong> on the web.
        </Paragraph>
        <Paragraph>
        I am an amateur developer, lecturer and independent writer.  Now based in China,
        working in a university. In my spare time, I observe the world and put them into
        articles, as you can see in my {' '}
          <NextLink href="https://blog.langdon.one" passHref scroll={false}>
            <Link>blog</Link>
          </NextLink>
        .</Paragraph>
        <Paragraph>
        Other than that, I working on some projects use my spare time from time to time,
        like planning and designing in my way to solving real-life problems with code, but
        most of them are now in private. Of course, I will consider opensourse them at the
        right moment, if they can be of any help to others. My development ability is not good
        because I majored in literature, so please forgive me if I made any naive mistakes.
        </Paragraph>
        <Paragraph>
        When I&apos;m not online, I like reading and writing, indulging in my own &quot;InfinitySpace&quot; .
        </Paragraph>
        </Section>

        <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Skills Tree
        </Heading>
        <BioSection>
          <BioYear>Music</BioYear>
          Sing, Remix, Play Violin.
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
          Tags
        </Heading>
        <Paragraph>
        自由撰稿人 & 创业中 | 低技术力 | 名校校友 | 无神论者 | 贝隆主义者 | ISTP | 肥宅 | 钢笔 & 键盘 & Hi-Fi & 游戏 | 咕咕 | 强迫症患者 | 越共 & 月厨 & 鲤友 | FF14 & ESO & 云图计划 & 明日方舟 | 软粉 | 雷军 & 姜文
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
                SuperLangdon@Github
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
          <NextLink href="https://blog.langdon.one/index.php/archives.html" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme={useColorModeValue('purple', 'orange')}>
              Read my posts
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
