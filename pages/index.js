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
import { IoLogoTwitter, IoLogoSteam, IoLogoGithub, IoPaperPlaneSharp, IoCodeSlashSharp } from 'react-icons/io5'
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
        I&apos;m an amateur developer, lecturer, and independent writer. Now based in China,
        working in a university. In my spare time, I observe the world and put them into
        articles, as you can see in {' '}
          <NextLink href="https://blog.langdon.one" passHref scroll={false}>
            <Link>my Blog</Link>
          </NextLink>
        . Also, you can follow {' '}
          <NextLink href="https://t.me/sapphe1r0s" passHref scroll={false}>
            <Link>my Telegram Channel </Link>
          </NextLink>
          to see something not that serious. However, these are all in Chinese.</Paragraph>
        <Paragraph>
        Other than that, I work on some projects using my spare time from time to time
        , like planning and designing in my way to solving real-life problems with code
        , but most of them are now in private. Of course, I will consider opensource them
        at the right moment, if they can be of any help to others. My development ability
        is not good because I majored in literature, so please forgive me if I made any naive mistakes.
        </Paragraph>
        <Paragraph>
        When I&apos;m not online, I like reading and writing, indulging in my own &quot;InfinitySpace&quot;.
        </Paragraph>
        <Paragraph>
        Finally, I&apos;m glad you were able to read this lengthy biography and please allow me to express my gratitude to you &#58; &#41;
        </Paragraph>
        </Section>

        <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Environment
        </Heading>
        <BioSection>
          <BioYear>System</BioYear><br />
          Windows 10 & 11\Deepin Linux 23\iOS 15 & 16\Android12 & 13
        </BioSection>
        <BioSection>
          <BioYear>Devices</BioYear><br />
          Keyboard - Akko 3108<br />
          Mouse - Logitech G304<br />
          Monitor - LG 27GL850<br />
          Laptop - Clevo NH50<br />
          Phone - Xiaomi MI 10<br />
          Tablet - iPad 8th Gen<br />
        </BioSection>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Tags
        </Heading>
        <Paragraph>
        自由撰稿人 & 创业中 | 低技术力 | 名校校友 | 无神论者 | 贝隆主义者 | ISTP | 肥宅 | 钢笔 & 键盘 & Hi-Fi & 游戏 | 咕咕 | 强迫症患者 | 越共 & 月厨 & 鲤友 | FF14 & ESO & 云图计划 & 明日方舟 | 软粉 | 雷军 & 姜文
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
        Contact me
        </Heading>
        <Paragraph>
        {' '}
          <NextLink href="mailto:email@langdon.one" passHref scroll={false}>
            <Link>Send me an Email</Link>
          </NextLink>
        , leave a comment on {' '}
          <NextLink href="https://blog.langdon.one/index.php/board.html" passHref scroll={false}>
            <Link>my Blog&apos;s message board</Link>
          </NextLink>
        , or find more of my contact information at On the web section. Please use Chinese & English when you contact me.
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
          <ListItem>
            <Link href="https://www.v2ex.com/member/CyberLangdon" target="_blank">
              <Button
                variant="ghost"
								colorScheme={useColorModeValue('purple', 'orange')}
								leftIcon={<IoCodeSlashSharp />}
              >
                CyberLangdon@V2EX
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
