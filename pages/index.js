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
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoTwitter, IoLogoSteam, IoLogoGithub, IoPaperPlaneSharp, IoCodeSlashSharp, IoLogoMastodon, IoDiamondOutline } from 'react-icons/io5'
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
        Hi there, I&apos;m Langdon, an amateur developer, individual Investor, and independent writer.
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
        <Heading as="h2" variant="page-title">
            Langdon Lin
          </Heading>
          <p>&#91;&#712;læŋdən&#93; / aka &ldquo;澜璒&rdquo;</p>
					<p>Amateur developer | Individual Investor | Independent Writer</p>
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
        Hi, my real name is <strong>Langdon Lin</strong> but I prefer the name <strong>&quot;澜璒&quot;</strong> on internet. Now based in China, working in a university. I&apos;m a:
        </Paragraph>
        <Paragraph>
        🛠️ <strong>Amateur developer</strong>
        </Paragraph>
        <Paragraph>
        I work on some projects using my spare time from time to time, like planning and designing in my way to solving reallife problems with code, but most of them are now in private. Of course, I will consider opensource them at the right moment, if they can be of any help to others. I&apos;m relatively specialize in Javascript, and I&apos;m learning Python now.
        </Paragraph>
        <Paragraph>
        I&apos;m currently working on my quantitative trading project.
        </Paragraph>
        <Paragraph>
        💵 <strong>Individual Investor</strong>
        </Paragraph>
        <Paragraph>
        I have been involved in the stock market and financial derivatives since 2015, and I currently invest mainly in the Hong Kong and US stock markets. In 2022, my return on equities has reached 46.5%. Currently I am still exploring.
        </Paragraph>
        <Paragraph>
        📰 <strong>Independent Writer</strong>
        </Paragraph>
        <Paragraph>
        In my spare time, I observe the world and put them into articles, as you can see in my {' '}
          <NextLink href="https://blog.langdon.one" passHref scroll={false}>
            <Link>Blog</Link>
          </NextLink>
          . I will write about the process and results of my practice and reflection, or what I have seen in my life or work. Some of the content is also the result of my sudden inspiration. I also write lyrics or translate some English content into Chinese.
          </Paragraph>
          <Paragraph>
          Also, you can follow my {' '}
          <NextLink href="https://sapphe1r0s.t.me" passHref scroll={false}>
            <Link>Telegram Channel </Link>
          </NextLink>
          to see something not that serious. I will broadcast what I saw while surfing on the Internet in it. However, these are all in Chinese.
        </Paragraph>
        <Paragraph>
        When I&apos;m not online, I like reading and writing, indulging in my own &quot;InfinitySpace&quot;.
        </Paragraph>
        <Paragraph>
        Finally, I&apos;m glad you were able to read this lengthy biography and please allow me to express my gratitude to you &#58; &#41;
        </Paragraph>
        </Section>

        <Box align="center" my={4}>
          <NextLink href="https://blog.langdon.one/archives.html" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme={useColorModeValue('purple', 'orange')}>
              Read my posts
            </Button>
          </NextLink>
        </Box>

        <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Uses
        </Heading>
        <BioSection>
          <BioYear>💾 Environment</BioYear><br />
          Windows 10 & 11\Ubuntu 20.04\macOS Ventura\iOS 15 & 16\Android12 & 13
        </BioSection>
        <BioSection>
          <BioYear>💻 Devices</BioYear><br />
          Keyboard - Akko 3108 V2<br />
          Mouse - Logitech G304<br />
          Headphone - Beyerdynamic Xelento<br />
          Monitor - LG 27GL850<br />
          Laptop -  Legion Y9000P<br />
          Phone - Xiaomi MI 10<br />
          Tablet - iPad 8th Gen<br />
          Camera - Sony Cyber-shot DSC-RX100 II<br />
        </BioSection>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Tags
        </Heading>
        <Paragraph>
        自由撰稿人 & 创业中 | 韭菜 | 低技术力 | 名校校友 | 无神论者 | 进步保守主义者 | ISTP | 肥宅 | 钢笔 & 键盘 & Hi-Fi & 游戏 | 咕咕 | 强迫症患者 | 越共 & 月厨 & 鲤友 | FF14 & ESO & 云图计划 & 明日方舟 | 软粉 | 雷军 & 姜文
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
        , or find more of my contact information at &quot;On the web&quot; section below. To make our communication smooth, use Chinese & English please.
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
            <Link href="https://o3o.ca/@sembers" target="_blank">
              <Button
                variant="ghost"
							colorScheme={useColorModeValue('purple', 'orange')}
                leftIcon={<IoLogoMastodon />}
              >
                余烬@Mastodon
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
          <ListItem>
            <Link href="https://afdian.net/a/landeng" target="_blank">
              <Button
                variant="ghost"
								colorScheme={useColorModeValue('purple', 'orange')}
								leftIcon={<IoDiamondOutline />}
              >
                澜璒@爱发电
              </Button>
            </Link>
          </ListItem>

          <Heading as="h3" variant="section-title">
          Newsletter
        </Heading>
        <Paragraph>
        Join VoyagerNews - it&apos;s currently in testing. Every two weeks, I&apos;ll provide you with my insights, observations, and thoughts.
        </Paragraph>

        </List>
        <Box align="center" my={4}>
        <Button
          as={NextLink}
          href="https://superlangdon.zhubai.love"
          scroll={false}
          leftIcon={<EmailIcon />}
          colorScheme={useColorModeValue('purple', 'orange')}
        >
        Sign up my newsletter here
        </Button>
          </Box>
      </Section>
			<Divider my={6} borderColor={useColorModeValue('purple.300', 'orange.200')} />
    </Container>
  </Layout >


)

export default Home
export { getServerSideProps } from '../components/chakra'
